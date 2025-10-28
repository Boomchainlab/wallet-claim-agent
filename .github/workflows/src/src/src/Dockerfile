FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

CMD ["node", "src/index.js"]
