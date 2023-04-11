
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Delete = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [newBodyText, setNewBodyText] = useState("");

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

  const deleteElementBody = (id) => {
    setData((prevData) => ({
      ...prevData,
      body: prevData.body.filter((element) => element.id !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/articles/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setShowModal(true);
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      {data ? (
        <>
          <h2>Modifying article {data.id}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Body:
              <ul>
                {data.body.map((element, index) => (
                  <li key={element.id}>
                    {element.text}
                    <button
                      type="button"
                      onClick={() => deleteElementBody(element.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </label>
            <button type="submit">Save changes</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
      {showModal && (
        <div>
          <p>Changes saved successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Delete;
