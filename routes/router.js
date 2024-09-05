const express = require("express")
const router = express.Router()
const { searchdata} = require("../Controller/handleget")
router.get("/", searchdata)
module.exports = router;