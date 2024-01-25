import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogContent from "../../../../models/blogContentFile";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords, content } = await request.json();
  await connectMongoDB();
  const blogList = await blogContent.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
    content,
  });
  return NextResponse.json({ blogList }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogDetailsData = await blogContent.findOne({ _id: id });
  return NextResponse.json({ blogDetailsData }, { status: 200 });
}
