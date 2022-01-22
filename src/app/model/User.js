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
        socialNetwork: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);
