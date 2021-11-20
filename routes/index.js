const express = require('express');
const app = express();

app.use(require('./qr'));
app.use(require('./login'));

module.exports = app;