FROM node:latest

LABEL maintainer="khacmanle@gmail.com"
# Create app directory
WORKDIR /usr/src/karros

# Install app dependencies
COPY package.json package-lock.json ./
RUN yarn

# Bundle app source
COPY . .

EXPOSE 3000
#ENV IPOS_MOCK_ENV=DIST
#ENV PORT=3600
CMD ["npm", "start"]