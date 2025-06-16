FROM node:18-slim AS base
WORKDIR /app
COPY . .
RUN npm ci --legacy-peer-deps
RUN npm run build

FROM node:18-slim AS production
WORKDIR /app
COPY --from=base /app /app
EXPOSE 80
CMD ["npm", "start"]