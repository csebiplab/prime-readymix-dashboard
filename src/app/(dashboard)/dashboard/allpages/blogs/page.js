"use client";

import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
import useFetchMetaData from "../../../../../hooks/useFetchMetaData";

const Page = () => {
  const editRoute = "dashboard/allpages/blogs/editblogs";
  const endPoints = "blogs";
  // const { blogRouteAllMetaData } = await getBlogMetaData() ?? {};
  // revalidatePath("/");
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + '/api/blogs'
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)


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
        blogRouteAllMetaData={data?.blogRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default Page;

// const getBlogMetaData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/blogs`, {
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
