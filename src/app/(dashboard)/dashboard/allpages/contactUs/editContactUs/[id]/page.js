"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchMetaData from "@/hooks/useFetchMetaData";
import React from "react";

const Page = ({ params }) => {
  const { id } = params;
  // const { contactUs } = await getcontactMetaDataById(id) ?? {};
  const endPoints = "contactUs";

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/contactUs/${id}`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { contactUs } = data;

  const { title, description, keywords } = contactUs;
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

export default Page;

// const getcontactMetaDataById = async (id) => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/contactUs/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch contactUs");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
