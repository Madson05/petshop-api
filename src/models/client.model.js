import Sequelize from "sequelize";
import { underscoredIf } from "sequelize/types/utils";
import sequelize from "../data/db.js";
import db from "../data/db.js"

const Client = db.define("clients", {
  client_id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false

  },
  cpf: {
    type: sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false
  },
  address: {
    type: sequelize.STRING,
    allowNull: false
  },
}, {underscored: true});

export default Client