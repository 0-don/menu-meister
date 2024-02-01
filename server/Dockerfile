# Install dependencies only when needed
# Stage 0
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json ./
COPY prisma ./prisma
RUN yarn

#############################################


# Rebuild the source code only when needed
# Stage 1
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npx prisma generate

RUN yarn build
#############################################


# Production image, copy only production files
# Stage 2
FROM node:20-alpine AS prod

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 4000

RUN yarn add sharp --ignore-engines

CMD yarn start
#############################################
