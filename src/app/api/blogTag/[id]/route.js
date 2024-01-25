import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogTag from "../../../../models/blogTag";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, slug, description } = await request.json();
  await connectMongoDB();
  const blogTagData = await blogTag.findByIdAndUpdate(id, {
    name,
    slug,
    description,
  });
  return NextResponse.json({ blogTagData }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const blogTagData = await blogTag.findOne({ _id: id });
  return NextResponse.json({ blogTagData }, { status: 200 });
}
