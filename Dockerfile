FROM node:17.1-bullseye

WORKDIR /app

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]
