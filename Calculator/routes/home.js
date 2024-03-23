const express = require("express")
const {calculator,getcalculator} = require("../controllers/home")

const router = express.Router()

router.post("/",calculator);
router.get("/",getcalculator);

module.exports = router;