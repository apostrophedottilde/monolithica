FROM node:10.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g tsc

RUN npm install -g nodemon

EXPOSE 8080

CMD [ "npm", "run", "dev", "--inspect=5858" ]
