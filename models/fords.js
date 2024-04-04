const mongoose = require("mongoose")
const fordSchema = mongoose.Schema({
fords_name: String,
fords_price: String,
fords_year: Number
})
module.exports = mongoose.model("fords",fordSchema)