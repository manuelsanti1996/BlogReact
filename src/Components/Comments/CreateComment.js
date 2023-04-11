import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const CreateComment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const id = searchParams.get('id');
    getDataArticle(parseInt(id));
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      setComments(data.comment);
    }
  }, [data]);
 


  const getDataArticle = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/articles?id=${id}`);
      if (!res.ok) {
        console.error('Failed to fetch data');
        return;
      }
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleAddComment = async () => {
    const id = searchParams.get('id');
    const res = await fetch(`http://localhost:8000/articles/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        text: text,
      }),
    });
    if (!res.ok) {
      console.error('Failed to save data');
      return;
    }
    alert('Comment added successfully');
    setName('');
    setText('');
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Titolo
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Inserisci il nome"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Commento
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Inserisci la descrizione"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAddComment}
          >
            Salva commento
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
