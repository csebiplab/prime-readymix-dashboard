import mongoose, { Schema, models } from "mongoose";

const AdminSchema = new Schema(
    {
        username: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

// Check if the Admin model already exists before defining it
const Admin = models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;
