const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.member = require("./member.model.js")(sequelize, Sequelize);
db.district = require("./district.model.js")(sequelize, Sequelize);
db.sub_district = require("./sub_district.model.js")(sequelize, Sequelize);
db.provice = require("./provice.model.js")(sequelize, Sequelize);
db.zipcode = require("./zipcode.model.js")(sequelize, Sequelize);


module.exports = db;