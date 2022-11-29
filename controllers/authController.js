// Controller de autenticacao
const express = require('express');

const User = require('../models/user.js');

// poder definir rotas apenas para usuario
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body); // cria usuario com parametros enviados no body, passando await pra esperar reposta
        
        return res.send({ user });
    } catch (err) {
        return res.status(404).send({ error: 'Registration failed' });
    }
})