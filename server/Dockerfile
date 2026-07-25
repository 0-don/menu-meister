# Stage 0
FROM node:20-alpine3.17 AS deps
WORKDIR /app

COPY package.json ./
COPY prisma ./prisma
RUN yarn
RUN yarn add sharp --ignore-engines

#############################################


# Stage 1
FROM node:20-alpine3.17 AS builder
WORKDIR /app

RUN apk add --no-cache openssl openssl1.1-compat

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npx prisma generate

RUN yarn build
#############################################


# Stage 2
FROM node:20-alpine3.17 AS prod

WORKDIR /app

# prisma 5.14 ships schema-engine-linux-musl linked against openssl 1.1, which
# alpine dropped after 3.17. Without libssl.so.1.1 the engine fails to relocate
# and prisma surfaces the loader error as unparseable JSON.
RUN apk add --no-cache tzdata openssl openssl1.1-compat

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
