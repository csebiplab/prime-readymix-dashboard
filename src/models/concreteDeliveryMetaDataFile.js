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

const concreteDeliveryRouteMetaData =
  mongoose.models.concreteDeliveryRouteMetaData ||
  mongoose.model("concreteDeliveryRouteMetaData", metaDataSchema);
export default concreteDeliveryRouteMetaData;


