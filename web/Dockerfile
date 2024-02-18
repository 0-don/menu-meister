# Stage 0
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json ./
RUN yarn
#############################################



# Stage 1
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG NEXT_PUBLIC_GRAPHQL_ENDPOINT
ARG NEXT_PUBLIC_BRAND_NAME
ENV NEXT_PUBLIC_GRAPHQL_ENDPOINT=$NEXT_PUBLIC_GRAPHQL_ENDPOINT
ENV NEXT_PUBLIC_BRAND_NAME=$NEXT_PUBLIC_BRAND_NAME

RUN yarn build 
#############################################

#############################################

# Stage 2
FROM node:20-alpine AS prod
WORKDIR /app

# Installv tzdata package
RUN apk add --no-cache tzdata

# Set the timezone
ENV TZ=Europe/Berlin
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/i18n.ts ./i18n.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn start
#############################################
