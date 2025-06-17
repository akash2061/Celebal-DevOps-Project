FROM node:18-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:18-slim AS production
WORKDIR /app
COPY --from=base /app/package*.json ./
RUN npm ci --legacy-peer-deps && npm cache clean --force
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 80
CMD ["npm", "start", "--", "--port", "80"]