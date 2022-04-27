////////////////////
// Dependencies
////////////////////
const mongoose = require("./connection");

//////////////////
//Schema and Models
////////////////////

//Schema
const tireSchema = new mongoose.Schema({
    sizeAspectRatio: Number,
    width: Number,
    rimSize: Number,
    price: Number,
    type: String,
    brand: String,
    img: String
}, 
{timestamps: true});

const Tire = mongoose.model("Tire", tireSchema);

///////////////
// Export Model
/////////////////
module.exports = Tire;