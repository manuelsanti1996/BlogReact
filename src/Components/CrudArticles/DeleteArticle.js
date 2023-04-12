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
            <div className="bg-white w-1/2 rounded-lg p-6">

              <form onSubmit={(e) => deleteList(e, data.id)}>


                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Elimina Articolo
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
  )
}

export default DeleteArticle
