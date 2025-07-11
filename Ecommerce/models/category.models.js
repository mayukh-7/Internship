import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subCat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory'
    }
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);