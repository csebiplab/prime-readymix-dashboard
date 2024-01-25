import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import siteMap from "../../../../models/siteMap";
export async function PUT(request, { params }) {
  const { id } = params;
  const { title, url } = await request.json();
  await connectMongoDB();
  const sitemap = await siteMap.findByIdAndUpdate(id, {
    title,
    url,
  });
  return NextResponse.json({ sitemap }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const siteMapData = await siteMap.findOne({ _id: id });
  return NextResponse.json({ siteMapData }, { status: 200 });
}
