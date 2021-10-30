FROM node
RUN npm install -g http-server
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["http-server", "dist"]