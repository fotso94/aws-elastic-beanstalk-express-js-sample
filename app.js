const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS TETE WORLD...GM Mr Love....God has always blessed me throughtout my life..'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
