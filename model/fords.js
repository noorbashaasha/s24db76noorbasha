const mongoose = require("mongoose")
const fordSchema = mongoose.Schema({
name: String,
price: Number,
year: Number
})
module.exports = mongoose.model("ford",
fordSchema)