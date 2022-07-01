module.exports = app => {
    const address = require("../controller/address.controller.js");
    var router = require("express").Router();
    
    router.get("/getProvince", address.getProvince);

    router.get("/getDistrict", address.getDistrict);

    router.get("/getSub_District", address.getSub_District);
    
    router.get("/getZipcode", address.getZipcode);

    app.use('/api/address', router);

}
