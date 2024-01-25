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

const contactRouteMetaData =
  mongoose.models.contactRouteMetaData ||
  mongoose.model("contactRouteMetaData", metaDataSchema);
export default contactRouteMetaData;
