import { model, Schema } from "mongoose";

const ProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    categories: { type: Array },
    shop: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Products", ProductsSchema);
