"use client"
import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchMetaData from "@/hooks/useFetchMetaData";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  // const { blogs } = await getblogMetaDataById(id) ?? {};
  const endPoints = "blogs";
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogs/${id}`
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { blogs } = data;

  const { title, description, keywords } = blogs;
  return (
    <ShareComponent
      id={id}
      titleValue={title}
      descriptionValue={description}
      keywordsValue={keywords}
      endPoints={endPoints}
    />
  );
};

export default page;

// const getblogMetaDataById = async (id) => {
//   // const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/blogs/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
