const mongoose = require("mongoose");


const ownerSchema = mongoose.Schema({
    fullname: {
        type: Array,
        default: []
    },
    email: String,
    Password: String,
    products: {
        type: Array,
        default: []
    },
    gstin: String,
    picture: String
});



module.exports = mongoose.model("owner", ownerSchema);