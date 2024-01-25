"use client";

import SiteVerificationComponent from "@/components/siteVerificationComponent/SiteVerificationComponent";
import useFetchMetaData from "../../../../hooks/useFetchMetaData";


export default function SeoSiteVerification() {
  // const { verificationUrl } = await getVerificationData() ?? {};
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/verificationUrl`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <SiteVerificationComponent verificationUrl={data?.verificationUrl} />
    </>
  );
}

// const getVerificationData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/verificationUrl`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch verification url & meta title");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading metadata: ", error);
//   }
// };
