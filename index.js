const express = require('express');
const fs = require('fs');

// константы
const port = 8080;

// приложение
const app = express();
app.get('/', (req, res) => {
  fs.readFile('data/data.json', 'utf-8', (error, data) => {

    if (error != undefined) {
      throw new Error(error.message);
    }

    res.send(`${JSON.parse(data).payload} ${new Date()}`);
  });
});

app.listen(port, () => {
    console.log(`Running on awesome port http://localhost:${port}`);
});