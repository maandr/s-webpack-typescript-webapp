FROM node:9.8-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

ENV NODE_ENV=production
ENV PORT=3000

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]