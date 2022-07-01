module.exports = (sequelize, Sequelize) => {
  const district = sequelize.define("district",{
    district_name: {
      type: Sequelize.STRING
    },
    fk_province_id: {
      type: Sequelize.INTEGER
    },
  });
  return district;
};

