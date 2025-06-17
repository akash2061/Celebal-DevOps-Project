FROM --platform=linux/amd64 node:18-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM --platform=linux/amd64 node:18-slim AS production
WORKDIR /app
COPY --from=base /app .

EXPOSE 80
CMD ["npm", "start"]