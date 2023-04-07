import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ModifyArticle = () => {
  const [data, setData] = useState(useState({ title: "", tag: "", body: [
  
  ] }));
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const id = searchParams.get("id");
    getDataArticle(parseInt(id));
  }, [searchParams]);
   
 

  const getDataArticle = async (id) => {
    const res = await fetch(`http://localhost:8000/articles?id=${id}`);
    const data = await res.json();
    setData(data[0]);
  };
 

  const updateList = (event, id) => {
    event.preventDefault();
    fetch(`http://localhost:8000/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setData({ ...data });
        getDataArticle(id);
      });
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4  px-4 rounded"
      >
        Modifica Articolo
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-1/2 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Inserisci i dati necessari</h2>
              <form onSubmit={(event) => updateList(event, data.id)}>
                <input
                  type="text"
                  value={data.title}
                  onChange={(event) =>
                    setData({ ...data, title: event.target.value })
                  }
                />
                <input
                  type="text"
                  value={data.tag}
                  onChange={(event) =>
                    setData({ ...data, tag: event.target.value })
                  }
                />
                
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  
                >
                  Salva
                </button>
                <button
                  onClick={closeModal}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Chiudi
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModifyArticle;



