"use client"

import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";
import useFetchMetaData from "../../../../../../../hooks/useFetchMetaData";

const page = ({ params }) => {
  const { id } = params;
  // const { testimonials } = await getTestimonialMetaDataById(id);
  const endPoints = "testimonials";

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/testimonials/${id}`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { testimonials } = data;

  const { title, description, keywords } = testimonials;
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

// const getTestimonialMetaDataById = async (id) => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/testimonials/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch testimonials");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
