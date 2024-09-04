
const mongoose = require("mongoose");
const item = mongoose.Schema({
    name: String,
    img: String,
    category: String
})
module.exports=mongoose.model("credential",item)