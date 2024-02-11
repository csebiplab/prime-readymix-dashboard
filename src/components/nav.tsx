// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import React, { useState } from "react";
import { dashboardConfig } from "@/config/dashboard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { Icon } from "@iconify/react";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  // const pathname = usePathname();
  // const router = useRouter();
  return (
    <div className="flex flex-col  gap-5 h-full">
      <h1 className="font-medium text-lg">Dashboard</h1>
      <nav className="flex flex-col  flex-1 gap-2">
        {dashboardConfig.sidebarNav.map((item, i=1) => {
          // const Icon = Icons[item?.icon];
          return <div key={i+1}><MenuItem item={item} /></div>;
        })}
      </nav>

      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  // console.log("item for dashboard nav", item);
  const IconOne = Icons[item?.icon];
  return (
    <div className="">
      {item?.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.href) ? "bg-zinc-100 text-gray-900" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {/* {item?.icon ?? "dd"} //icon will be here const Icon = Icons[item?.icon];*/}
              <IconOne size={16} />
              <span className="">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-6 flex flex-col space-y-4">
              {item?.submenus?.map((subItem, i=1) => {
                const IconTwo = Icons[subItem?.icon];
                return (
                  <Link
                    key={i+1}
                    href={subItem.href}
                    className={cn(
                      "py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center ",
                      pathname === subItem.href ? "bg-gray-2" : ""
                    )}
                    // className={`${
                    //   subItem.path === pathname ? "font-bold" : ""
                    // }`}
                  >
                    <div className="flex flex-row space-x-4 items-center">
                      <IconTwo size={16} />
                      <span>{subItem.title}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item?.href}
          className={cn(
            "py-1 text-sm px-2 rounded-lg flex flex-row gap-2 transition-colors items-center ",
            pathname === item.href ? "bg-gray-2" : ""
          )}
          // key={key}
          // className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
          //   item.path === pathname ? "bg-zinc-100" : ""
          // }`}
        >
          {/* {item.icon} */}
          <div className="flex flex-row space-x-4 items-center">
            <IconOne size={16} />
            <span className="">{item.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
};
