const db = require("../model");
const Op = db.Sequelize.Op;
const Provice = db.provice;
const District = db.district;
const Sub_District = db.sub_district
const Zipcode = db.zipcode



exports.create = (req, res) => {

};
// Retrieve all Tutorials from the database.
exports.getProvince = (req, res) => {
  Provice.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving member."
      });
    });
};
exports.getDistrict = (req,res)=>{
  const provinceId = req.query.provinceId;

  var condition = provinceId ? { fk_province_id: { [Op.eq]: provinceId} } : null;
  District.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving getDistrict."
    });
  });
}

exports.getSub_District = (req,res)=>{
  const districtId = req.query.districtId;
  const provinceId = req.query.provinceId;


  var condition = districtId && provinceId ? { fk_district_id: { [Op.eq]: districtId}  ,fk_province_id:{[Op.eq]:provinceId} } : null;
  Sub_District.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving getSub_District."
    });
  });
}
exports.getZipcode = (req,res)=>{
  const districtId = req.query.districtId;
  const provinceId = req.query.provinceId;

  var condition = districtId && provinceId ? { fk_district_id: { [Op.eq]: districtId}  ,fk_province_id:{[Op.eq]:provinceId} } : null;
  Zipcode.findAll({ where: condition })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving getZipcode."
    });
  });
}