FROM node

RUN mkdir app
WORKDIR "/app"
RUN npm install mongo-express

EXPOSE 8081
ENV ME_CONFIG_MONGODB_SERVER="172.17.0.1"
ENV ME_CONFIG_MONGODB_ENABLE_ADMIN="true"
ENV ME_CONFIG_MONGODB_PORT=32000

CMD cd /app/node_modules/mongo-express/ && node app.js