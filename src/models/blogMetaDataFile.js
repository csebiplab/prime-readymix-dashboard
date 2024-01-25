import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    title: String,
    description: String,
    keywords: String,
  },
  {
    timestamps: true,
  }
);

const blogRouteMetaData =
  mongoose.models.blogRouteMetaData ||
  mongoose.model("blogRouteMetaData", metaDataSchema);
export default blogRouteMetaData;

//database stored by post api
//also get api applied
