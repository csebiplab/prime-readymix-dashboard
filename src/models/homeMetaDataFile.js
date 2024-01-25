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

const homeRouteMetaData =
  mongoose.models.homeRouteMetaData ||
  mongoose.model("homeRouteMetaData", metaDataSchema);
export default homeRouteMetaData;
