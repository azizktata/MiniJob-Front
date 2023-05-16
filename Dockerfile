FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm config set legacy-peer-deps true, npm i
RUN npm run build
EXPOSE 3000
CMD [ "npx", "serve", "build" ]