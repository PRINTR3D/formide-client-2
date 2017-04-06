FROM mhart/alpine-node:4

# Install native dependencies
RUN apk add --update git python make g++ && \
  rm -rf /tmp/* /var/cache/apk/*

# Install global NPM dependencies
RUN npm install -g node-pre-gyp

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN npm install json-stable-stringify
RUN cd /tmp && npm install
RUN mkdir -p /opt/formide-client && cp -a /tmp/node_modules /opt/formide-client

# Define working directory and add root app dir to it
WORKDIR /opt/formide-client
ADD . /opt/formide-client

# Expose API and UI ports
EXPOSE 1337
EXPOSE 8080

# Run the app
CMD ["node", "app.js"]
