// import ShareComponent from "@/components/shareComponent/ShareComponent";
import CreateCategory from "@/components/blogsComponent/CreateCategory/CreateCategory";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const data = await getAllCategoryDataById(id);
  return (
    <CreateCategory id={id} data={data} />
  );
};

export default page;

const getAllCategoryDataById = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogCategory/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
