// import mongoose from "mongoose";
// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("connect to mongodb successfullly");
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default connectMongoDB;


import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error to handle it outside this function if needed
  }
};

export default connectMongoDB;
