import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import blogContent from "../../../models/blogContentFile";

export async function POST(request) {
  try {
    const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
    // console.log({ blogTitle, metaTitle, metaDescription, metaKeywords, shortDescription, content })
    await connectMongoDB();
    await blogContent.create({ blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content });
    return NextResponse.json(
      { message: "Blog content Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error storing blog content:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const blogContentData = await blogContent.find();
  return NextResponse.json({ blogContentData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await blogContent.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog deleted" },
    { status: 200 }
  );
}
