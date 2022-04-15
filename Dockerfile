FROM node:16-alpine

# docker build  . -t react -f Dockerfile --build-arg PROJECT_NAME="my-app"
ENV PORT 8080

# ARG PROJECT_NAME "my-app"

RUN mkdir /code
WORKDIR /code

COPY my-app .
WORKDIR my-app

RUN npm install && \
    npm install -g \
      express-generator \
      create-react-app

WORKDIR ..
RUN rm -rf my-app

# RUN echo "|--> Install create-react-app" \
#     && npm install -g create-react-app \
#     && create-react-app ${PROJECT_NAME}

CMD ["npm", "run", "start"]
