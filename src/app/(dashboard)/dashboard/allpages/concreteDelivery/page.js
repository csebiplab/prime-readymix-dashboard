"use client";

import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
import useFetchMetaData from "@/hooks/useFetchMetaData";

const page = () => {
  const editRoute = "dashboard/allpages/concreteDelivery/editConcreteDelivery";
  const endPoints = "concreteDelivery";
  // const { concreteDeliveryRouteAllMetaData } =
  //   await getConcreteDeliveryMetaData() ?? {};
  // revalidatePath("/");

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/concreteDelivery`
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
        blogRouteAllMetaData={data?.concreteDeliveryRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

// const getConcreteDeliveryMetaData = async () => {
//   const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;
//   try {
//     const res = await fetch(`${baseAPIUrl}/api/concreteDelivery`, {
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
