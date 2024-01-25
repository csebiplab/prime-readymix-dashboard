"use client";

import useFetchMetaData from "@/hooks/useFetchMetaData";
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";


const page = () => {
  const editRoute = "dashboard/allpages/contactUs/editContactUs";
  const endPoints = "contactUs";
  // const { contactRouteAllMetaData } = await getContactMetaData() ?? {};
  // revalidatePath("/");

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/contactUs`
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
        blogRouteAllMetaData={data?.contactRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

// const getContactMetaData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/contactUs`, {
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
