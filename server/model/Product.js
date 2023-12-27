const { model, models, Schema } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  category: {
    type: String,
    enum: {
      values: [
        "phones",
        "laptops",
        "accessories",
        "ipads",
        "tv & home",
        "watches",
      ],
      message: "please enter valid category",
    },
  },
  availability: {
    type: Boolean,
    default: true,
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
  },
  description: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
  },
});

module.exports = models.Product || model("Product", productSchema);
