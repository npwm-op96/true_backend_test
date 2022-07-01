module.exports = (sequelize, Sequelize) => {
  const sub_district = sequelize.define("sub_district",{
    sdistrict_name: {
      type: Sequelize.STRING
    },
    sdistrict_name: {
      type: Sequelize.STRING
    },
    fk_province_id: {
      type: Sequelize.INTEGER
    },
    fk_district_id: {
      type: Sequelize.INTEGER
    },
  });
  return sub_district;
};

