FROM node:10

WORKDIR /home/jean/trybe-exercicios/3-back-end/secao-1-docker-utilizando-containers/dia-3-orquestrando-containers-com-docker-compose/exercises-day-3/exercise-three/react-with-docker

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]