# react tutorial

## 事前に設定
- https://github.com/keywalker-inc/sente-ner/wiki/%E9%96%8B%E7%99%BA%E7%92%B0%E5%A2%83%E3%81%AE%E8%A8%AD%E5%AE%9A

```bash
$ git clone [this repository]
$ cd [this repository]
```

### ビルド

```bash
$ NAME="react"
$ BUILD_FILE="Dockerfile"
$ docker build . -t $NAME -f $BUILD_FILE [--build-arg HOGE=hoge]
```

### 実行

```bash
# tail -1 Dockerfile
CMD ["npm", "run", "start"]

$ bash run.sh
$ bash run.sh /bin/sh
```

### npm start 実行時の処理

#### react-scripts start

- https://www.delftstack.com/ja/howto/react/react-scripts-start/#react-scripts-start
- https://github.com/keywalker-inc/sente-ner/tree/main/Frontend/frontend_ner/README.md

```bash
$ cat package.json

...（省略）
  "scripts": {
    "start": "react-scripts start",   # npm start
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
...
```

```bash
# npm run start (npm start) は、以下を実行
npm start src/index.js
```

#### src/index.js

- 内部で `src/App.js` が実行される

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// src/App.js が実行される
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

#### src/App.js

- ブラウザの `root` に表示する html を作成するスクリプト

<!--
## memo

```bash
docker save react | gzip > react
docker run -d --name react react
docker cp cd89ac8cb142d93de1b3725fabd937c9754722e71f73aebcda825c67c41837dd:/code/my-app/src ./
```
-->
