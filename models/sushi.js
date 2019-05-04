module.exports = (sequelize, DataTypes) => {
    let Sushi = sequelize.define("Sushi", {
        sushi_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Sushi.associate = function(models) {
        Sushi.belongsTo(models.Servant, {
          foreignKey: {
            allowNull: false
          }
        });
      };

    return Sushi
}


