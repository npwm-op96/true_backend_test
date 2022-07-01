const db = require("../model");
const Member = db.member;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
      const member = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        Create_By: 'Admin',
        Province:req.body.Province,
        District: req.body.Khet,
        Sub_District: req.body.Khwang,
        Zipcode: req.body.Zipcode,
      };
      Member.create(member)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Member."
        });
      });
};

exports.findAll = (req, res) => {
  Member.findAll()
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

exports.findOne = (req, res) => {
  const id = req.params.id;
  Member.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Member with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Member with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const member = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    Province:req.body.Province,
    District: req.body.Khet,
    Zipcode: req.body.Zipcode,
    last_update_by: 'Admin',
    Sub_District: req.body.Khwang
  };
  const id = req.params.id;
  console.log(req.body)
  Member.update(member, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Member with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Member.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Member with id=" + id
      });
    });
};