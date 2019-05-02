module.exports = (sequelize, Sequelize) => {
    let Sushi = sequelize.define("Sushi", {
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
    return Sushi
}


