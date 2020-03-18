ARG BASE_IMAGE=node:13.6.0-alpine

FROM ${BASE_IMAGE} as builder

RUN apk add --no-cache ca-certificates

RUN mkdir -p /opt/ts-node-express-hello
WORKDIR /opt/hello

COPY package.json /opt/hello/package.json
COPY package-lock.json /opt/hello/package-lock.json

RUN npm install --loglevel=error --no-optional --save

FROM ${BASE_IMAGE}

RUN mkdir -p /opt/hello
WORKDIR /opt/hello

COPY --from=builder /opt/hello/node_modules /opt/hello/node_modules

COPY tsconfig.json /opt/hello/tsconfig.json
COPY .eslintrc /opt/hello/.eslintrc
COPY package.json /opt/hello/package.json
COPY package-lock.json /opt/hello/package-lock.json

COPY src /opt/hello/src
COPY test /opt/hello/test
