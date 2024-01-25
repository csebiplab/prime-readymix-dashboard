"use client";

import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
import React from "react";
import useFetchMetaData from "../../../../../../hooks/useFetchMetaData";

const page = ({ params }) => {
  const { id } = params;
  // console.log("siteMap data", await getSiteMapDataById(id));
  // const sitemapData = await getSiteMapDataById(id);

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/siteMap/${id}`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { sitemapData } = data;
  const { title, url } = sitemapData;
  return <SiteMapComponent id={id} titleValue={title} urlValue={url} />;
  // return <SiteMapComponent id={id} titleValue={"dd"} urlValue={"dd"} />;
};

export default page;

// const getSiteMapDataById = async (id) => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/siteMap/${id}`, {
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
