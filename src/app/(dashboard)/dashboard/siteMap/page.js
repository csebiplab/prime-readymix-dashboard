"use client";

import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
import useFetchMetaData from "../../../../hooks/useFetchMetaData";


export default function siteMap() {
  // const { sitemap } = await getSitemapData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/siteMap`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { sitemap } = data;

  return (
    <>
      <SiteMapComponent sitemap={sitemap} />
    </>
  );
}

// const getSitemapData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/siteMap`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch sitemap url");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading sitemap: ", error);
//   }
// };
