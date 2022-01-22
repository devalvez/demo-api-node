const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            reuqired: true
        },
        birthday: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        socialNetwork: [{
            facebook: {
                type: String,
                required: false
            },
            instagram: {
                type: String,
                required: false
            },
            twitter: {
                type: String,
                required: false
            },
            linkeding: {
                type: String,
                required: false
            }
        }]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);
