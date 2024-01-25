"use client";

import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
import useFetchMetaData from "../../../../../hooks/useFetchMetaData";


const page = () => {
  const editRoute = "dashboard/allpages/home/editHome";
  const endPoints = "home";
  // const { homeRouteAllMetaData } = await getHomeMetaData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/home`;
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
        blogRouteAllMetaData={data?.homeRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

// const getHomeMetaData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/home`, {
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
