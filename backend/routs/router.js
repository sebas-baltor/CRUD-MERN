const express = require("express");
const router = express.Router();
const controler = require("../controler/controler");

router.get("/",controler.geting);
router.post("/add",controler.add);
router.put("/update/:id",controler.update);
router.delete("/delete/:id",controler.delete)

module.exports = router