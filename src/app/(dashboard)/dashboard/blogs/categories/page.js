"use client"

import React from "react";
import CategoryList from "@/components/blogsComponent/CategoryList/CategoryList";
import useFetchMetaData from "@/hooks/useFetchMetaData";
export default function page() {
  // const { blogCategories } = await getAllCategoryData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogCategory`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <CategoryList allCategorylist={data?.blogCategories} />
    </div>
  );
}

// const getAllCategoryData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/blogCategory`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch metaData");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading metadata: ", error);
//   }
// };
