"use client";

import { useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

import "./BlogContentEditor.css";
export default function BlogContentEditor({ inputValue, handleInputChange }) {
  return (
    <div className="__blog_content-text-editor">
      <QuillNoSSRWrapper
        modules={modules}
        theme="snow"
        className="block lg:w-9/12 w-full"
        value={inputValue?.content}
        onChange={(e) => handleInputChange("content", e)}
        placeholder="Content goes here..."
      />
    </div>
  );
}
