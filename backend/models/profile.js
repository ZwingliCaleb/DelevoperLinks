const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;