const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const PROVIDER_ENUM = ["FACEBOOK", "GOOGLE"];
const ROLE_ENUM = ["ADMIN", "USER"];
const TYPE_ENUM = ["ADMIN", "USER"];

var UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatarUrl: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ROLE_ENUM,
    },
    type: {
      type: String,
      required: true,
      enum: TYPE_ENUM,
    },
    /*  location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
        //required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    }, */

    provider: [
      {
        uid: { required: true, type: String },
        type: { required: true, type: String, enum: PROVIDER_ENUM },
      },
    ],
  },
  { timestamps: true }
);
UserSchema.index({ email: 1 });
//Export the model
module.exports = mongoose.model("User", UserSchema);
