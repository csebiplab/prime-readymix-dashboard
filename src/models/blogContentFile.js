import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(

  {
    blogTitle: String,
    metaTitle: String,
    customLink: String,
    metaDescription: String,
    metaKeywords: String,
    shortDescription: String,
    content: String
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
