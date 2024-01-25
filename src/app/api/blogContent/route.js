import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import blogContent from "../../../models/blogContentFile";

export async function POST(request) {
  try {
    const { title, description, keywords, content } = await request.json();
    // console.log(title, description, keywords, content)
    await connectMongoDB();
    await blogContent.create({
      title,
      description,
      keywords,
      content,
    });
    return NextResponse.json(
      { message: "Blog content MetaData generated" },
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
  const blogContentData = await blogContent.find();
  return NextResponse.json({ blogContentData });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await blogContent.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Blog route meta deleted" },
    { status: 200 }
  );
}
