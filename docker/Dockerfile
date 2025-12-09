FROM node:18-alpine
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm ci --only=production
COPY app/ .
RUN npm run seed
EXPOSE 3000
CMD ["node", "app.js"]
