import { Schema, models, model, Types } from "mongoose";

const cartSchema = new Schema({
  productId: {
    type: Types.ObjectId,
    required: [true],
    ref: "Product",
  },
  userId: {
    type: Types.ObjectId,
    required: [true],
    ref: "User",
  },
  count: {
    type: Number,
    default: 1,
  },
});

export default models?.Cart || model("Cart", cartSchema);
