const { model, models, Schema } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please enter email "],
    trim: true,
    validate: validator.isEmail,
  },
  avatar: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = models?.User || model("User", userSchema);
