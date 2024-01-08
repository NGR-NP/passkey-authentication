FROM node:20
WORKDIR /usr/src/app

CMD ["npx", "nodemon", "index.js"]

COPY package.json /usr/src/app/
RUN npm i

COPY . /usr/src/app/
