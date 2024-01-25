import connectMongoDB from "../../../../lib/mongodb";
import homeRouteMetaData from "../../../../models/homeMetaDataFile";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description, keywords } = await request.json();
  await connectMongoDB();
  const home = await homeRouteMetaData.findByIdAndUpdate(id, {
    title,
    description,
    keywords,
  });
  return NextResponse.json({ home }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const home = await homeRouteMetaData.findOne({ _id: id });
  return NextResponse.json({ home }, { status: 200 });
}
