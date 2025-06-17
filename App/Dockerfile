FROM --platform=linux/amd64 node:18-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM --platform=linux/amd64 node:18-slim AS production
WORKDIR /app
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/public ./public

EXPOSE 80
CMD ["npx", "next", "start", "-p", "80"]