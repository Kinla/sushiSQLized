module.exports = (sequelize, DataTypes) => {
  let Servant = sequelize.define("Servant", {
    servantName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,30]
      }
    },
  });

  Servant.associate = function(models) {
    Servant.hasMany(models.Sushi, {
      onDelete: "cascade"
    });
  };

  return Servant;
};