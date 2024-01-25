"use client"

import React from "react";
import CreateUpdateTag from "../../../../../components/blogsComponent/CreateUpdateTag/CreateUpdateTag";
import TagList from "../../../../../components/blogsComponent/TagList/TagList";
import useFetchMetaData from "@/hooks/useFetchMetaData";
export default function page() {
  // const { blogTags } = await getAllTagData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogTag`;
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
      <TagList allTaglist={data?.blogTags} />
    </div>
  );
}

// const getAllTagData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/blogTag`, {
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
