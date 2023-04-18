import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ModifyArticle = () => {
  const [data, setData] = useState(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

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


  const modifyArticle = () => {
    fetch(`http://localhost:8000/articles/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        title: title,
        image: image,
        description: description,
        tag: tag,
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
          title: title,
          image: image,
          description: description,
          tag: tag,

        }));
        window.location.reload();
      })
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
                    Titolo
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Immagine
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Descrizione
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Tag
                  </label>
                  <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
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
