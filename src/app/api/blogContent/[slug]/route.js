import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogContent from "../../../../models/blogContentFile";

export async function PUT(request, { params }) {
  const { slug } = params;
  const { blogTitle, metaTitle, metaDescription, metaKeywords, shortDescription, content } = await request.json();
  const id = slug;
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
  const { slug } = params;
  // const {metaTitle}

  const metaTitle = slug;

  // console.log("got metatitle", metaTitle)


  await connectMongoDB();
  const blogDetailsData = await blogContent.findOne({ metaTitle });
  return NextResponse.json({ blogDetailsData }, { status: 200 });
}