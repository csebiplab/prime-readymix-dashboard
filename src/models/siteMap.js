import mongoose, { Schema } from "mongoose";

const metaDataSchema = new Schema(
  {
    title: String,
    url: String,
  },
  {
    timestamps: true,
  }
);

const siteMap =
  mongoose.models.siteMap || mongoose.model("siteMap", metaDataSchema);
export default siteMap;
