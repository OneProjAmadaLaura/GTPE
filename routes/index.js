const express = require('express');
const app = express();

app.use(require('./qr'));

module.exports = app;