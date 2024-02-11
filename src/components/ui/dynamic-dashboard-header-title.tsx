"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DynamicDashboardHeaderTitle = () => {
  const [title, setTitle] = useState("Static Title");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dashboard/blogs") {
      setTitle("All Blogs");
    }
    if (pathname === "/dashboard/blogs/addNew") {
      setTitle("Add A New Blog");
    }

    return () => {
      setTitle("Static Title");
    };
  }, [pathname]);

  return <h1 className="text-xl font-medium flex-1">{title}</h1>;
};

export default DynamicDashboardHeaderTitle;
