const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PlasticDb');
const Schema = mongoose.Schema;

var NewPlasticSchema = new Schema({
    Username : String,
    Address : String,
    Location : String,
    PlasticMaterial : String,
    Quantity : Number,
    Sapling : String,
    Feedback : String
});

var Plasticdata = mongoose.model('plastic',NewPlasticSchema);

module.exports = Plasticdata;