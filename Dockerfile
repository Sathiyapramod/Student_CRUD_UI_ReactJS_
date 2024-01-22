FROM node:16.16.0-buster AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

RUN npm run start

