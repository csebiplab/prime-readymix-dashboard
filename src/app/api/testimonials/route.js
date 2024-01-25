import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import testimonialRouteMetaData from "../../../models/testimonialMetaDataFile";

export async function POST(request) {
  try {
    const { title, description, keywords } = await request.json();
    await connectMongoDB();
    await testimonialRouteMetaData.create({
      title,
      description,
      keywords,
    });
    return NextResponse.json(
      { message: "Testimonial MetaData generated" },
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
  const testimonialRouteAllMetaData = await testimonialRouteMetaData.find();
  return NextResponse.json({ testimonialRouteAllMetaData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await testimonialRouteMetaData.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Testimonial route meta deleted" },
    { status: 200 }
  );
}
