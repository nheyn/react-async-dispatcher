# A Docker image to run the todo list example
FROM node:5

# Get needed libraries
RUN apt-get update
RUN apt-get install -y libelf1

# Create node user
RUN groupadd node && useradd -m -g node node
WORKDIR /home/node/react-async-dispatcher/
RUN chown node:node ./

# Get react-async-dispatcher files
COPY ./.flowconfig ./.flowconfig
COPY ./type.js ./type.js
COPY ./.babelrc ./.babelrc
COPY ./package.json ./package.json
COPY ./src ./src
COPY ./example ./example
RUN chown -R node:node ./*

# Run tests
USER node
RUN npm install

# Start example
WORKDIR /home/node/react-async-dispatcher/example/
RUN npm install
CMD npm start

EXPOSE 8080