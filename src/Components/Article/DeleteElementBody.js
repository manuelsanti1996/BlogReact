
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
    <div class="p-5">
      <h2 class="text-lg font-bold mb-4">Delete Element Body</h2>

      <div class="flex flex-col mb-4">
        <label class="text-sm font-bold text-gray-700 mb-2">Select Element</label>
        <select
          class="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500"
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

      <button
        class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={deleteElement}
      >
        Delete Element
      </button>
    </div>


  );
};

export default DeleteElementBody;
