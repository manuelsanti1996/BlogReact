import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ModifyArticle = () => {
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [id, setId] = useState("");
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
            const res = await fetch(`http://localhost:8000/comments?id=${id}`);
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
        fetch(`http://localhost:8000/comments/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
                name: name,
                comment: comment
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData((prevData) => ({
                    ...prevData,
                    name: name,
                    comment: comment,
                }));
            })
    };






    return (
        <div className="p-5">

            <h3 className="text-lg font-medium">Modifica Commento</h3>

            <div className="mt-6">
            </div>
            <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Nome
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Commento
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Id
                </label>
                <input
                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className="mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={modifyArticle}
                >
                    Modifica
                </button>
            </div>
        </div>
    );
};

export default ModifyArticle;
