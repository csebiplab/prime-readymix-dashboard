import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogContent from "../../../../models/blogContentFile";

export async function PUT(request, { params }) {
  const { id } = params;
  const { blogTitle, metaTitle, metaDescription, metaKeywords, shortDescription, content } = await request.json();
  await connectMongoDB();
  const blogList = await blogContent.findByIdAndUpdate(id, {
    blogTitle,
    metaTitle,
    metaDescription,
    metaKeywords,
    shortDescription,
    content
  });
  return NextResponse.json({ blogList }, { status: 200 });
}

export async function GET(request, { params }) {
  const { metaTitle } = params;
  // const {metaTitle}

  await connectMongoDB();
  const blogDetailsData = await blogContent.findOne({ metaTitle });
  return NextResponse.json({ blogDetailsData }, { status: 200 });
}
