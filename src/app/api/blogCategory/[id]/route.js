import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogCategory from "../../../../models/blogCategory";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, slug, description } = await request.json();
  await connectMongoDB();
  const blogCategoryData = await blogCategory.findByIdAndUpdate(id, {
    name,
    slug,
    description,
  });
  return NextResponse.json({ blogCategoryData }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogCategoryData = await blogCategory.findOne({ _id: id });
  return NextResponse.json({ blogCategoryData }, { status: 200 });
}
