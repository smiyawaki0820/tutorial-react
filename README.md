# react tutorial

## 事前に設定
- https://github.com/keywalker-inc/sente-ner/wiki/%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AE%E8%A8%AD%E5%AE%9A

## docker build 

```bash
$ NAME="react"
$ BUILD_FILE="Dockerfile"
$ docker build . -t $NAME -f $BUILD_FILE [--build-arg HOGE=hoge]
```

## docker run

```bash
$ bash run.sh
$ bash run.sh /bin/sh
```

## memo

```bash
docker save react | gzip > react
docker run -d --name react react
docker cp cd89ac8cb142d93de1b3725fabd937c9754722e71f73aebcda825c67c41837dd:/code/my-app/src ./
```
