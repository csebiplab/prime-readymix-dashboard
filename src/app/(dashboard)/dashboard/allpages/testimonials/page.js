"use client";

import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
import useFetchMetaData from "../../../../../hooks/useFetchMetaData";

const page = () => {
  const editRoute = "dashboard/allpages/testimonials/editTestimonials";
  const endPoints = "testimonials";
  // const { testimonialRouteAllMetaData } = await getTestimonialMetaData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/testimonials`;
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
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={data?.testimonialRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

// const getTestimonialMetaData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/testimonials`, {
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
