const mongoose = require("mongoose")
const fordSchema = mongoose.Schema({
fords_name: String,
fords_price: {type: String,minlength:1,maxlength: 20},
fords_year: {type: Number,min: 0,max: 9000,}
})
module.exports = mongoose.model("fords",fordSchema)