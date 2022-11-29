const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false  // quando buscar usuarios, senha nao venha junto 
    },
    createdAt: { // anotar data de criacao do registro
        type: Date,
        default: Date.now
    }
});

// definir model passando nome e eschema dele
const User = mongoose.model('User', UsersSchema);

module.exports = User;