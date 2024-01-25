import React from "react";
import CreateUpdateTag from "../../../../../../../components/blogsComponent/CreateUpdateTag/CreateUpdateTag";

const page = async ({ params }) => {
  const { id } = params;
  const data = await getAllTagDataById(id);
  return <CreateUpdateTag id={id} data={data} />;
};

export default page;

const getAllTagDataById = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogTag/${id}`, {
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
