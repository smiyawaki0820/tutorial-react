#!/bin/bash

ROOT_DIR=$HOME/sente/develop/tutorial-react

docker run --rm -it \
  -p 8080:8080 \
  --mount type=bind,source=$ROOT_DIR/public,target=/app/public \
  --mount type=bind,source=$ROOT_DIR/src,target=/app/src \
  react $1
