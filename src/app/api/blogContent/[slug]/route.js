import connectMongoDB from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import blogContent from "../../../../models/blogContentFile";
import { ObjectId } from 'mongodb';


export async function PUT(request, { params }) {
  const { slug } = params;
  const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
  const id = slug;
  await connectMongoDB();
  const blogList = await blogContent.findByIdAndUpdate(id, {
    blogTitle,
    metaTitle,
    customLink,
    metaDescription,
    metaKeywords,
    shortDescription,
    content
  });
  return NextResponse.json({ blogList }, { status: 200 });
}

// export async function GET(request, { params }) {
//   const { slug } = params;

//   const customLink = slug;

//   await connectMongoDB();
//   const blogDetailsData = await blogContent.findOne({ customLink });
//   return NextResponse.json({ blogDetailsData }, { status: 200 });
// }



export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug || typeof slug !== 'string') {
      throw new Error('Invalid slug parameter');
    }

    await connectMongoDB();

    let blogDetailsData;

    // Check if slug is a valid ObjectId
    if (ObjectId.isValid(slug)) {
      // If slug is a valid ObjectId, search by _id
      blogDetailsData = await blogContent.findOne({ '_id': new ObjectId(slug) });
    } else {
      // If not a valid ObjectId, search by id or customLink
      blogDetailsData = await blogContent.findOne({ 'customLink': slug });
    }

    if (!blogDetailsData) {
      // If no data found, return a 404 response
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Return the found blog details
    return NextResponse.json({ blogDetailsData }, { status: 200 });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

