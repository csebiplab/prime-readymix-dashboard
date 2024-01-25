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

const testimonialRouteMetaData =
  mongoose.models.testimonialRouteMetaData ||
  mongoose.model("testimonialRouteMetaData", metaDataSchema);
export default testimonialRouteMetaData;
