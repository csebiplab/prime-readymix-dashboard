import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    name: String,
    slug: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const blogCategory =
  mongoose.models.blogCategory ||
  mongoose.model("blogCategory", metaDataSchema);
export default blogCategory;
