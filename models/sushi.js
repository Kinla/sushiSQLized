const Sequelize = require("sequelize")

const sequelize = require("../config/connection.js")

let Sushi = sequelize.define("sushi", {
    sushi_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
})

Sushi.sync()

module.exports = Sushi