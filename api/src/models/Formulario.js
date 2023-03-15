const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('formulario', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    dni: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    consulta:{
      type: DataTypes.TEXT,
      allowNull: true,
    },


  });
};
