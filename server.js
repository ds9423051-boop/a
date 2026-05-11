const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download', (req, res) => {
    res.redirect('https://YOUR-SITE-B.vercel.app/');
});

module.exports = app;
