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

const blogTag =
  mongoose.models.blogTag || mongoose.model("blogTag", metaDataSchema);
export default blogTag;
