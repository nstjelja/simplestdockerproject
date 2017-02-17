FROM node
VOLUME /opt/app
WORKDIR /opt/app
ADD ./entrypoint.sh /opt/app/entrypoint.sh
RUN chmod u+rwx /opt/app/entrypoint.sh && npm install
ENTRYPOINT ["/bin/bash", "-c", "/opt/app/entrypoint.sh $@"]
CMD ["node","index.js"]
