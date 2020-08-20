const express = require('express');

// константы
const port = 8080;

// приложение
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Running on awesome port http://localhost:${port}`);
});