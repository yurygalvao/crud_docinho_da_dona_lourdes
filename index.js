const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const rotasDoces = require('./routes/doces');
app.use('/', rotasDoces);

app.listen(port, () => {
    console.log(`Servidor a rodar em http://localhost:${port}`);
});