const express = require('express')
const bodyParser = require('body-parser');

const app = express(); // cria application

app.use(bodyParser.json()); // entenda requisões com formato json
app.use(bodyParser.urlencoded({ extended: false })); // decodar parametros passados na url

// rota simples
app.get('/', (req, res) => {
    res.send('OK!')
})

// registrar e autenticar usuarios
require.resolve('./controllers/authController')(app); // repassar o app ao controller

app.listen(3000);