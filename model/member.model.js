module.exports = (sequelize, Sequelize) => {
  const member = sequelize.define("member", {
    username: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    Province: {
      type: Sequelize.INTEGER
    },
    District: {
      type: Sequelize.INTEGER
    },
    Sub_District: {
      type: Sequelize.INTEGER
    },
    Zipcode: {
      type: Sequelize.INTEGER
    },
    Create_By: {
      type: Sequelize.STRING,
      default: 'Admin'
    },
    last_update_by: {
      type: Sequelize.STRING
    }
  },);
  return member;
};