
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const DeleteElementBody = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    const id = searchParams.get("id");
    getDataArticle(parseInt(id));
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

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

  const deleteElement = () => {
    fetch(`http://localhost:8000/articles/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        body: data.body.filter((element) => element.type !== selected),
      }),
    })
      .then((res) =>
        setData({
          ...data,
          body: data.body.filter((element) => element.type !== selected),
        })

      )
  };






  return (
    <div className="p-5">
      <h2>Delete Element Body</h2>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-700 tracking-wide">
            Select Element
          </label>
          <select
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select Element</option>
            {data?.body?.map((element) => (
              <option key={element.id} value={element.id}>
                {element.type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="px-4 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={deleteElement}
      >
        Delete Element
      </button>
    </div>
  );
};

export default DeleteElementBody;
