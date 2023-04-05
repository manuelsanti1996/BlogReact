import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const CreateArticle = () => {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [tag, setTag] = useState("")
    const navigate = useNavigate();

    const handleSaveData = (e) => {
        e.preventDefault();
        console.log(id, title, image, description, tag)
    }
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSaveData}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                        ID
                    </label>
                    <input
                        value={id}
                        onChange={e => setId(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="id"
                        type="text"
                        placeholder=""
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Titolo
                    </label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Inserisci il titolo"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                        Descrizione
                    </label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Inserisci la descrizione"
                    ></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
                        Inserisci immagine
                    </label>
                    <input
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        accept="image/*"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="tags">
                        Scegli un tag tra questi
                    </label>
                    <select
                        value={tag}
                        onChange={e => setTag(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="tags"
                    >
                        <option value="">Seleziona un tag</option>
                        <option value="tag1">Tag 1</option>
                        <option value="tag2">Tag 2</option>
                        <option value="tag3">Tag 3</option>
                        <option value="tag4">Tag 4</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSaveData}
                >
                    Salva dati
                </button>
              
              
                    <Link to={"/"}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Back

                </Link>

            </form>
        </div>


    );
}

export default CreateArticle;
