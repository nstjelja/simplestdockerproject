FROM ubuntu

# Add mongodb repository
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list

RUN apt-get update && apt-get install -y nodejs npm mongodb-org
RUN npm install -g mongo-express

VOLUME ["/data/db"]

WORKDIR /data

# Expose mongodb port
EXPOSE 27017
EXPOSE 28017

#Check nodejs version
CMD ["mongod"]