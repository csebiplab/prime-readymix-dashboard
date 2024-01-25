"use client"

import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";
import useFetchMetaData from "@/hooks/useFetchMetaData";

const Page = ({ params }) => {
  const { id } = params;
  // const { concreteDelivery } = await getConcreteDeliveryMetaDataById(id) ?? {};
  const endPoints = "concreteDelivery";
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/concreteDelivery/${id}`
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const { concreteDelivery } = data;

  const { title, description, keywords } = concreteDelivery;
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

// const getConcreteDeliveryMetaDataById = async (id) => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(
//       `${baseAPIUrl}/api/concreteDelivery/${id}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
