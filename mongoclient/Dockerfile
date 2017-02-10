FROM node

RUN mkdir app
WORKDIR "/app"
RUN npm install mongo-express


ENV ME_CONFIG_MONGODB_SERVER="172.17.0.1"
ENV ME_CONFIG_MONGODB_PORT=32000
ENV ME_CONFIG_MONGODB_AUTH_DATABASE="admin"
ENV VCAP_APP_HOST="0.0.0.0"

WORKDIR /app/node_modules/mongo-express
RUN cp config.default.js config.js
EXPOSE 8081
CMD npm start