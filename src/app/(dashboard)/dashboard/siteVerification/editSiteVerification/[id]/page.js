"use client";

import SiteVerificationComponent from "@/components/siteVerificationComponent/SiteVerificationComponent";
import React from "react";
import useFetchMetaData from "../../../../../../hooks/useFetchMetaData";

const page = ({ params }) => {
  const { id } = params;
  // const { verificationData } = await getVerificationMetaDataById(id) ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/verificationUrl/${id}`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { verificationData } = data;

  const { title, url } = verificationData;
  return (
    <SiteVerificationComponent id={id} titleValue={title} urlValue={url} />
  );
};

export default page;

// const getVerificationMetaDataById = async (id) => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/verificationUrl/${id}`, {
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
