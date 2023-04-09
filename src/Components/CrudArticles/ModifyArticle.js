import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ModifyArticle = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);

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
        if (res.ok) {
          setShowModal(true);
        }
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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 p-4 rounded" type="button" onClick={() => setShowModal(true)}>
        Modifica Articolo
      </button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
              <div className="px-4 py-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Modifica Articolo</h3>
                  <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    Chiudi
                  </button>
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Tipo di contenuto
                  </label>
                  <select
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"

                  >
                    <option value="image">Immagine</option>
                    <option value="paragraph">Paragrafo</option>
                    <option value="quote">Citazione</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Contenuto
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-blue-200"
                    onClick={modifyArticle}
                  >
                    Modifica
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default ModifyArticle;
