import { model, Schema } from "mongoose";

const OrdersSchema = new Schema(
  {
    sessionId: { type: String, required: true },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Products" },
        quantity: { type: Number, default: 1 },
      },
    ],
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default model("Orders", OrdersSchema);
