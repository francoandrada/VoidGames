const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      varchar: 255,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      varchar: 255,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      char: 15,
    },
    rating: {
      type: DataTypes.INTEGER,
      char: 10,
    },
    platforms: {
      type: DataTypes.STRING,
      varchar: 255,
    },
    })
  };