# Stage 0
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json ./
COPY prisma ./prisma
RUN yarn
RUN yarn add sharp --ignore-engines

#############################################


# Stage 1
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache openssl

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npx prisma generate

RUN yarn build
#############################################


# Stage 2
FROM node:22-alpine AS prod

WORKDIR /app

# openssl: prisma's schema engine dlopens libssl at runtime; without it the
# engine fails to load and prisma reports the error as unparseable JSON.
RUN apk add --no-cache tzdata openssl

# Set the timezone
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 4000

CMD yarn start
#############################################
