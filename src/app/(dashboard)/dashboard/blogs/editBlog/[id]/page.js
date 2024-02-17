import React from "react";
import CreateBlog from "../../../../../../components/blogsComponent/CreateBlog/CreateBlog";

const page = async ({ params }) => {
  const { id } = params;
  console.log(id, "from editBlog/id")
  const data = await getBlogDataById(id);

  console.log("edit blog data from editBlog/id: ", data)

  return <CreateBlog id={id} data={data} />;
};
export default page;

const getBlogDataById = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
