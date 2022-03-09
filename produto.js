const Sequelize = require('sequelize');
const database = require('../db');
const Fabricante = require('./fabricante')


const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
    
})

Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
})

Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
    
})

/**
 * 1-1
 * 1-N
 * N:M
 * 
 * 
 */
module.exports = Produto;