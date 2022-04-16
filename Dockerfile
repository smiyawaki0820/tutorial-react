FROM node:16-alpine

# docker build  . -t react -f Dockerfile --build-arg PROJECT_NAME="my-app"
ENV PORT 8080

RUN mkdir /app
WORKDIR /app

# NOTE: node_modules/ は volume しない
COPY package.json /app

RUN npm install && \
    npm install -g express-generator

# RUN echo "|--> Install create-react-app" \
#     && npm install -g create-react-app \
#     && create-react-app ${PROJECT_NAME}

CMD ["npm", "run", "start"]
