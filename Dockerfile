FROM node:latest
MAINTAINER Javier Lopez lopez <sjavierlopez@gmail.com>

VOLUME ["/app"]

WORKDIR /app

RUN npm install && \
    npm build


# Expose the app port
EXPOSE 3000

# Start the app
CMD npm start