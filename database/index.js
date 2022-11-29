const mongoose = require('mongoose');

// criando conexao com banco de dados em mongo e definindo pra ele usar o mongo client
mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;