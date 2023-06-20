FROM node:19-alpine as builder
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile
COPY . .
RUN pnpm build
RUN rm -rf node_modules && pnpm i --frozen-lockfile --production

FROM node:19-alpine AS runner
LABEL org.opencontainers.image.source "https://github.com/JonaVDM/temperature"
WORKDIR /app
COPY package.json .
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "build"]
