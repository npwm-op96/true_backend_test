module.exports = (sequelize, Sequelize) => {
  const zipcode = sequelize.define("zipcode",{
    zipcode_no: {
      type: Sequelize.STRING
    },
    fk_province_id: {
      type: Sequelize.INTEGER
    },
    fk_district_id: {
      type: Sequelize.INTEGER
    },
  });
  return zipcode;
};

