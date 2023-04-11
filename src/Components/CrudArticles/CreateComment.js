import React, {useState} from 'react'

const CreateComment = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [data, setData] = useState(null);
    const [id,setId]= useState(null);



    const AddArticle = () => {
        fetch(`http://localhost:8000/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:id,
                name: name,
                comment: comment,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData((prevData) => ({
                    ...prevData,
                    id:id,
                    name: name,
                    comment: comment,
                }));
            });
    };
    return (
        <div className='p-5 '>
            <h1 className="text-lg font-medium">Crea Commento</h1>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Nome</label>
                <input
                 className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Commento</label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                  <label>Id</label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={AddArticle}>Aggiungi Commento</button>
            </div>
        </div>
    )
}


export default CreateComment
