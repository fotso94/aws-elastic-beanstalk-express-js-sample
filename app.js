const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS TETE WORLD...GM Mr Love....This is a Change of My Life!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
