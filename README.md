# node-express-server

simple 8080 port http server

## Pre-requisites

[Node.js](https://nodejs.org/)

[GIT](https://git-scm.com/)


## How-To Build

1\. create project folder and move to it

```shell
mkdir node.express.server`
cd node.express.server`
```

2\. config node project

```shell
npm init
```

answer like this:
>package name: (node.express.server)
>version: (1.0.0)
>description: Simple node express server
>entry point: server.js
>test command:
>git repository:
>keywords:
>author: gtnasser@gmail.com
>license: (ISC)

to create a package.json file like this:
```javascript
{
  "name": "node-express-server",
  "version": "1.0.0",
  "description": "Simple node express server",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "gtnasser@gmail.com",
  "license": "ISC"
}
```

3\. app

create a new file server.js

```javascript
// simple 8080 port express server
// usage: node server [PORT]

const PORT = process.argv[2] || process.env.PORT || 8080
const express = require('express')
const app = express()

var http = require('http')

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * (max-1))
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(`Hello World! #${getRandomInt(250)}`)
  console.log(`Request from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)
}).listen(PORT, 
  () => console.log(`Listening on port ${PORT}`)
)
```

4\. run

```sh
node server
```

## install & run

```
git clone https://github.com/gtnasser/node-express-server
cd node-express-server
npm install
node server
```

