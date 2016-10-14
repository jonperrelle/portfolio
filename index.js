'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const root = __dirname;

const npmPath = path.join(root, './node_modules');
const browserPath = path.join(root, './browser');
const publicPath = path.join(root, './public');
const faviconPath = path.join(root, './public/images/favicon.ico');

app.use(favicon(faviconPath));
app.use(express.static(npmPath));
app.use(express.static(browserPath));
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/*', function (req, res) {
    res.sendFile(path.join(root, './browser/index.html'));
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("Listening on Port 3000!");
});


module.exports = app;