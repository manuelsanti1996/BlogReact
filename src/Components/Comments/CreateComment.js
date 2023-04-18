import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const AddComment = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);



  useEffect(() => {
    const id = searchParams.get("id");
    getDataArticle(parseInt(id));
  }, [searchParams]);










  const getDataArticle = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/articles?id=${id}`);
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const AddElement = async () => {
    let updatedData = { comment: [] };
    if (data) {
      updatedData = { ...data };
      if (!updatedData.comment) {
        updatedData.comment = [];
      }
    }
    updatedData.comment.push({ name, text });

    try {
      const res = await fetch(`http://localhost:8000/articles/${data?.id || ""}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        console.error("Failed to update data");
        return;

      }

    } catch (error) {
      console.error("Error updating data", error);
    }
  };



  return (
    <div className="p-5">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 tracking-wide">
            Name
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="name"
            type="text"
            placeholder="Name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm font-bold text-gray-700 tracking-wide">
            Text
          </label>
          <input
            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="text"
            type="text"
            placeholder="Text"
            value={text || ""}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            type="button"
            onClick={AddElement}
          >
            Add Comment
          </button>
        </div>
      </div>
    </div>

  );
};

export default AddComment;
