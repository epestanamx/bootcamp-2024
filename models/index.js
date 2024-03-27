const path = require('path');
const { readdirSync } = require('fs');
const { Sequelize, DataTypes } = require("sequelize");

let sequelize;
const db = {};

const init = () => {
  if (!sequelize) {
    sequelize = new Sequelize({
      host: "develop.salesup.com.mx",
      username: "bootcamp",
      password: "Bootcamp2024",
      dialect: "mssql",
      port: 1433,
      database: "BOOTCAMP2024",
      dialectOptions: {
        options: {
          encrypt: false,
        },
      },
    });
  }

  const files = readdirSync(__dirname)
    .filter((file) => {
      return file.endsWith(".js") && file !== 'index.js';
    });

  files.forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};

module.exports = init;

