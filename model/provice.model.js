module.exports = (sequelize, Sequelize) => {
    const province = sequelize.define("province",{
        province_name: {
        type: Sequelize.STRING
      },
    });
    return province;
  };