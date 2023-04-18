import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ModifyComment = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

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

  const handleCommentChange = (index, field, value) => {
    const updatedComment = { ...comments[index], [field]: value };
    const updatedComments = [...comments];
    updatedComments[index] = updatedComment;
    setComments(updatedComments);
  };

  const handleSaveChanges = async () => {
    const id = searchParams.get('id');
    await fetch(`http://localhost:8000/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        comment: comments,
      }),
    }).then(() => {

      window.location.reload();

    });
  };

  const handleClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Modifica Commenti</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}>
        {showComments ? 'Nascondi commenti' : 'Mostra commenti'}
      </button>
      {showComments && (
        <ul className="mt-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-4">
              <input
                className="border rounded py-2 px-4 mr-2"
                defaultValue={comment.name}
                onChange={(event) =>
                  handleCommentChange(index, 'name', event.target.value)
                }
              />
              <input
                className="border rounded py-2 px-4"
                defaultValue={comment.text}
                onChange={(event) =>
                  handleCommentChange(index, 'text', event.target.value)
                }
              />
            </li>
          ))}
        </ul>
      )}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
        onClick={handleSaveChanges}>
        Salva
      </button>
    </div>
  );

};

export default ModifyComment;
