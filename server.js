const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/download', (req, res) => {

  res.redirect('https://coral-theta.vercel.app/');

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started');
});
module.exports = app;
