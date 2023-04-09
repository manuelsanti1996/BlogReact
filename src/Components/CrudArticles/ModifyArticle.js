import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ModifyArticle = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

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

  const modifyArticle = () => {
    fetch(`http://localhost:8000/articles/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        body: renderElementBody(document.querySelector("select").value, inputValue),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData((prevData) => ({
          ...prevData,
          body: renderElementBody(document.querySelector("select").value, inputValue),
        }));
      })
  };

  const renderElementBody = (type, inputValue) => {
    let body = data.body ? [...data.body] : [];
    switch (type) {
      case "image":
        body.push({ type: "image", src: inputValue });
        break;
      case "paragraph":
        body.push({ type: "paragraph", textValue: inputValue });
        break;
      case "quote":
        body.push({ type: "quote", textValue: inputValue });
        break;
      default:
        break;
    }
    return body;
  };





  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  return (
    <div>
      <select>
        <option value="image">Image</option>
        <option value="paragraph">Paragraph</option>
        <option value="quote">Quote</option>
      </select>

      <input value={inputValue} onChange={handleInputChange} />

      <button type="button" onClick={() => modifyArticle(data.id)}>
        Modify
      </button>
    </div>
  );
};

export default ModifyArticle;
