"use client";

import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import BlogList from "../../../../components/blogsComponent/BlogList/BlogList";
import useFetchMetaData from "@/hooks/useFetchMetaData";
export default function page() {
  // const data = await getAllBlogsData();

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogContent`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <BlogList allBlogList={data} />
    </div>
  );
}

// const getAllBlogsData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/blogContent`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch blogs list");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading blogs list: ", error);
//   }
// };
