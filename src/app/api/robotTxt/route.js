import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import robottxts from "../../../models/robots";


export async function GET() {
    await connectMongoDB();
    const robotTxts = await robottxts.find();
    return NextResponse.json({ robotTxts });
  }
  