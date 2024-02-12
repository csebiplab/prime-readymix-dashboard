import mongoose, { Schema } from "mongoose";

const robotSchema = new Schema(
  {
    sitemap_url: String,
    user_agent: String,
    allow: String,
    disallow: String
  },
  {
    timestamps: true,
  }
);

const robottxts =
  mongoose.models.robottxts || mongoose.model("robottxts", robotSchema);
export default robottxts;
