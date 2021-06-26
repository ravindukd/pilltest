const express = require('express');
const { keystone, apps } = require('./index.js');
var cors = require('cors')

keystone
  .prepare({
    apps: apps,
    dev: process.env.NODE_ENV !== 'production',
  })
  .then(async ({ middlewares }) => {
    await keystone.connect();
    const app = express();

    app.use(cors())
    app.use(middlewares).listen(80);
  });
