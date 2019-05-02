const Sequelize = require("sequelize")

const sequelize = require("../config/connection.js")

let Sushi = sequelize.define("sushi", {
    sushi_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,50]
        }
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

Sushi.sync()

module.exports = Sushi