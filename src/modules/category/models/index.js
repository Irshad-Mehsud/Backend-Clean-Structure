import { Schema } from "mongoose";
import mongoose from "mongoose";
const CategorySchema  = new Schema(
 {
    name: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  },
  { timestamps: true }
);

  const Model = mongoose.model('Category', CategorySchema);
  export default Model;