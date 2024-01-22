FROM node:latest
WORKDIR /
COPY . .

# Update npm
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
