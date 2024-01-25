"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import BlogContentEditor from "./BlogContentEditor";
import { toast } from "react-toastify";

function CreateBlog({ id, data }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    keywords: "",
    content: "",
  });

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    if (data) {
      const { blogDetailsData } = data;
      setInputValue({
        title: blogDetailsData?.title,
        keywords: blogDetailsData?.keywords,
        description: blogDetailsData?.description,
        content: blogDetailsData?.content,
      });
    }
  }, [id]);
  const handleInputChange = (eventKey, e) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [eventKey]: e.target.value,
    }));
  };
  // const handleBlogContentEditor = (eventKey, e) => {
  //   setInputValue((prevInputValue) => ({
  //     ...prevInputValue,
  //     [eventKey]: e,
  //   }));
  // };
  const handleSubmit = async () => {
    if (id) {
      let { title, description, keywords, content } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, keywords, content }),
        });
        if (!res.ok) {
          toast(`Failed to update blog data`);
        }
        if (res.status == 200) {
          toast(`Successfully updated blog data`);
          router.refresh();
          router.push(`/dashboard/blogs`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      let { title, description, keywords, content } = inputValue;
      try {
        const res = await fetch(`${baseAPIUrl}/api/blogContent`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, keywords, content }),
        });

        if (res.ok) {
          toast(`Successfully submitted blog content meta data`);
          router.refresh();
          router.push(`/dashboard/blogs`);
        } else {
          throw new Error(`Failed to create blogData meta data`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="px-5">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-14">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.title}
                // onChange={handleTitleChange}
                onChange={(e) => handleInputChange("title", e)}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Keywords
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="keywords"
                id="keywords"
                autoComplete="given-name"
                className="block lg:w-4/6 w-full px-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue.keywords}
                // onChange={handleTitleChange}
                onChange={(e) => handleInputChange("keywords", e)}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Short Description
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                name="description"
                rows="4"
                id="description"
                autoComplete="family-name"
                className="block lg:w-4/6 w-full px-5  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={inputValue?.description}
                // onChange={handleDescriptionChange}
                onChange={(e) => handleInputChange("description", e)}
              />
            </div>
          </div>
          <div className="blogContentEditor">
            {/* <BlogContentEditor
              inputValue={inputValue}
              handleInputChange={handleBlogContentEditor}
            /> */}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 my-5 px-5 border border-blue-500 hover:border-transparent rounded"
        >
          {id ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;
