import { Schema } from "mongoose";
import mongoose from "mongoose";
const ProductSchema = new Schema(
  {
    name: { type: String, required: true },   // Product name
    description: { type: String, required: true }, // Product details
    price: { type: Number, required: true },  // Product price
    stock: { type: Number, default: 0 },      // Quantity available
    category: { type: String, required: true }, // e.g. electronics, fashion
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

  const Model = mongoose.model('Product', ProductSchema);
  export default Model;