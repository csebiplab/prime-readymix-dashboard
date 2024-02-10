import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Admin from "@/models/admin";


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


export async function POST(request) {
    try {
        // Parse the incoming JSON data containing username and password
        const { username, password } = await request.json();
        // console.log(username, password)

        // Connect to MongoDB
        await connectMongoDB();

        // Find the admin by username
        const admin = await Admin.findOne({ username });

        // If admin is not found, return an error
        if (!admin) {
            return NextResponse.json(
                { error: "Invalid username or password" },
                { status: 401 } // Unauthorized status code
            );
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, admin.password);

        // If passwords don't match, return an error
        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Invalid username or password" },
                { status: 401 } // Unauthorized status code
            );
        }

        // If authentication is successful, return a success message or any other data as needed
        return NextResponse.json(
            { message: "Login successful", admin },
            { status: 200 } // OK status code
        );
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error during admin login:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 } // Internal Server Error status code
        );
    }
}
