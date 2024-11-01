FROM docker.io/node:22-alpine

LABEL org.opencontainers.image.title="Insomnia ID - Bot" \
      org.opencontainers.image.description="Verkkopeliyhdistys Insomnia ry - Identity Bot" \
      org.opencontainers.image.url=https://insomnia.fi \
      org.opencontainers.image.source=https://github.com/insomniafi/insid-bot \
      org.opencontainers.image.documentation=https://github.com/insomniafi/insid-bot/blob/master/README.md \
      org.opencontainers.image.authors="Christer Waren/Warén Group <no-reply@waren.io>"

#Dependencies
RUN apk add --virtual .build-deps python3 make g++ gcc git

WORKDIR /usr/src/app

COPY / /usr/src/app/

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]
