FROM node:latest
MAINTAINER Javier Lopez lopez <sjavierlopez@gmail.com>

COPY . /app

WORKDIR app

RUN npm install

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]