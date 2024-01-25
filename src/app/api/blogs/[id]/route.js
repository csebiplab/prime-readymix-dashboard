import connectMongoDB from "../../../../lib/mongodb";
import blogRouteMetaData from "../../../../models/blogMetaDataFile";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await connectMongoDB();
  const blogs = await blogRouteMetaData.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ blogs }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogs = await blogRouteMetaData.findOne({ _id: id });
  return NextResponse.json({ blogs }, { status: 200 });
}
