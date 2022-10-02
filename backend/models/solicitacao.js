"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Solicitacao.belongsTo(models.User);
    }
  }
  Solicitacao.init(
    {
      descricao: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Solicitacao",
    }
  );
  return Solicitacao;
};
