import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Admin from "@/models/admin";
import mongoose from "mongoose";

// Temp api for create one time admin profile
// export async function POST(request) {
//     try {
//         // Parse the incoming JSON data containing username and password
//         const { username, password } = await request.json();

//         // Connect to MongoDB
//         await connectMongoDB();

//         // Check if admin with the same username already exists
//         const existingAdmin = await Admin.findOne({ username });
//         if (existingAdmin) {
//             return NextResponse.json(
//                 { error: "Admin with this username already exists" },
//                 { status: 400 } // Bad Request status code
//             );
//         }

//         // Hash the password
//         const saltRounds = 10;
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Create a new admin
//         await Admin.create({ username, password: hashedPassword });

//         return NextResponse.json(
//             { message: "Admin created successfully" },
//             { status: 201 } // Created status code
//         );
//     } catch (error) {
//         console.error("Error creating admin:", error);
//         return NextResponse.json(
//             { error: "Internal Server Error" },
//             { status: 500 } // Internal Server Error status code
//         );
//     }
// }

// Update admin profile


export async function PUT(request) {
    // Connect to MongoDB
    await connectMongoDB();

    // Start Mongoose session
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { currentUserName, newUserName, currentPassword, newPassword } = await request.json();

        // Find the admin by currentUserName
        const admin = await Admin.findOne({ username: currentUserName }).session(session);

        // If admin is not found, return an error
        if (!admin) {
            return NextResponse.json(
                { error: "Invalid username" },
                { status: 401 }
            );
        }

        // Compare the provided currentPassword with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(currentPassword, admin.password);

        // If passwords don't match, return an error
        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }

        // Update admin's username if newUserName is provided
        if (newUserName) {
            admin.username = newUserName;
        }

        // Hash the new password if newPassword is provided
        if (newPassword) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            admin.password = hashedPassword;
        }

        // Save the updated admin
        await admin.save();

        // Commit the transaction
        await session.commitTransaction();

        return NextResponse.json(
            { message: "Updated successfully", admin: { userName: newUserName || currentUserName } },
            { status: 200 }
        );
    } catch (error) {
        // Abort transaction if an error occurs
        await session.abortTransaction();

        console.error("Error during update profile:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        // End the session
        session.endSession();
    }
}