FROM node

RUN mkdir app
WORKDIR "/client"
RUN npm install mongo-express
ADD "./app" "app"
ADD "./start.ps" "start.ps"
RUN chmod u+rwx /client/start.ps

WORKDIR "/client/app"
RUN npm rebuild && npm install

WORKDIR "/client"

ENV ME_CONFIG_MONGODB_SERVER="mongo"
ENV ME_CONFIG_MONGODB_PORT=27017
ENV ME_CONFIG_MONGODB_AUTH_DATABASE="admin"
ENV VCAP_APP_HOST="0.0.0.0"

WORKDIR /client/node_modules/mongo-express
RUN cp config.default.js config.js

WORKDIR /client

EXPOSE 8081
CMD /client/start.ps