import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    title: String,
    description: String,
    keywords: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const blogContent =
  mongoose.models.blogContent || mongoose.model("blogContent", metaDataSchema);
export default blogContent;

//database stored by post api
//also get api applied
