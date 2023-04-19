import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";

const DeleteArticle = () => {
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();



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


  const deleteList = (event, id) => {
    event.preventDefault();
    fetch(`http://localhost:8000/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((result) => {
        setData({});
        setSearchParams(new URLSearchParams(""));
        navigate('/');
      });
  };




  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 p-4 rounded"
      >
        Elimina Articolo
      </button>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-1/2 rounded-lg shadow-lg">
              <div className="flex flex-col h-full">
                <div className="bg-gray-200 px-4 py-2 flex justify-between items-center rounded-t-lg">
                  <h3 className="text-lg font-bold text-gray-800">Elimina Articolo</h3>
                  <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="px-6 py-4 flex-1">
                  <p className="text-gray-700 mb-4">Sei sicuro di voler eliminare l'articolo?</p>
                  <form onSubmit={(e) => deleteList(e, data.id)}>
                    <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mr-2">
                      Elimina
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  )
}

export default DeleteArticle
