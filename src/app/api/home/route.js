import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import homeRouteMetaData from "../../../models/homeMetaDataFile";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    // console.log(title, description, keywords)
    await connectMongoDB();
    await homeRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Home MetaData generated" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing metadata:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const homeRouteAllMetaData = await homeRouteMetaData.find();
  return NextResponse.json({ homeRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await homeRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
