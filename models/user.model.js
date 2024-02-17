const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    createdOn : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);