import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const DeleteComment = () => {
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selected, setSelected] = useState(null);


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


    const deleteElement = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8000/articles/${data.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    comment: data.comment.filter((element) => element.name !== selected),
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to delete element");
            }
            const newData = {
                ...data,
                comment: data.comment.filter((element) => element.name !== selected),
            };
            setData(newData);
        } catch (error) {
            console.error("Error deleting element", error);
        }
    };








    return (
        <div className="p-5">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <label className="text-sm font-bold text-gray-700 tracking-wide">
                        Select Comment
                    </label>
                    <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="">select Comment</option>
                        {data?.comment?.map((element) => (

                            <option value={element.name}>
                                {element.name}
                            </option>

                        ))}

                    </select>
                </div>
            </div>

            <button
                className="px-4 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={deleteElement}
            >
                Delete Element
            </button>
        </div>
    );
};

export default DeleteComment;
