FROM node:16-alpine
WORKDIR /app
COPY ./gateway .
RUN npm i
EXPOSE 9000
CMD ["npm", "run", "start:dev"]