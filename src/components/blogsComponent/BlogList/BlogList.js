"use client";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBlogBtnComponent from "../RemoveBlogBtnComponent";
export default function BlogList({ allBlogList }) {
  // console.log(allBlogList)
  return (
    <div>
      <div className="px-5">
        <div className="tableHeaderArea flex items-end justify-end">
          {" "}
          <Link href={`/dashboard/blogs/addNew`}>
            {" "}
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded">
              Add new Blog
            </button>
          </Link>
        </div>
        <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Blog Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Meta Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Meta Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Meta keywords
                </th>
                <th scope="col" className="px-6 py-3">
                  Short Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allBlogList?.blogContentData?.map((item) => (
                <tr
                  key={item?._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item?.blogTitle}
                  </th>
                  <td className="px-6 py-4">{item?.metaTitle.length > 20 ? `${item?.metaTitle.substring(0, 20)}...` : item?.metaTitle}</td>
                  <td className="px-6 py-4">{item?.metaDescription.length > 20 ? `${item?.metaDescription.substring(0, 20)}...` : item?.metaDescription}</td>
                  <td className="px-6 py-4">{item?.metaKeywords.length > 20 ? `${item?.metaKeywords.substring(0, 20)}...` : item?.metaKeywords}</td>
                  <td className="px-6 py-4">{item?.shortDescription.length > 20 ? `${item?.shortDescription.substring(0, 20)}...` : item?.shortDescription}</td>
                  <td className="px-6 py-4">{item?.content.length > 20 ? `${item?.content.substring(0, 20)}...` : item?.content}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {" "}
                      <Link href={`/dashboard/blogs/editBlog/${item?._id}`}>
                        <HiPencilAlt size={24} />
                      </Link>
                      <RemoveBlogBtnComponent id={item._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
