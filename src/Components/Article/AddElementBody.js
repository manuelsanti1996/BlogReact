import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const AddBody = (props) => {
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState("");
    const [selectedType, setSelectedType] = useState("p");


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

    const AddElementBody = async (e) => {
        e.preventDefault();
        if (!inputValue) {
            console.log("Please insert a value");
            return;
        }
        try {
            const res = await fetch(`http://localhost:8000/articles/${data.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    body: renderElementBody(selectedType, inputValue, data),
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to add element");
            }
            const newData = {
                ...data,
                body: renderElementBody(selectedType, inputValue, data),
            };
            setData(newData);
            setInputValue("");
            props.OnAddElementBody();
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };





    const renderElementBody = (type, inputValue, data) => {
        switch (type) {
            case "image":
                return [
                    ...data.body,
                    {
                        type: "image",
                        src: inputValue,
                    },
                ];
            case "paragraph":
                return [
                    ...data.body,
                    {
                        type: "paragraph",
                        textValue: inputValue,
                    },
                ];
            case "quote":
                return [
                    ...data.body,
                    {
                        type: "quote",
                        textValue: inputValue,
                    },
                ];
            default:
                return data.body;
        }
    };





    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div class="p-5">
            <h2 class="text-sm font-bold mb-4 text-gray-700">Crea un elemento</h2>
            <form class="flex flex-col space-y-4" onSubmit={AddElementBody}>
                <div class="flex flex-col md:flex-row md:space-x-4">
                    <label class="text-gray-700 font-bold md:w-1/4 mb-2" htmlFor="type">Tipo</label>
                    <select
                        class="w-full md:w-3/4 bg-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="type"
                        id="type"
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="image">Immagine</option>
                        <option value="paragraph">Paragrafo</option>
                        <option value="quote">Citazione</option>
                    </select>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-4">
                    <label class="text-gray-700 font-bold md:w-1/4 mb-2 " htmlFor="value">Testo</label>
                    <input
                        class="w-full md:w-3/4 bg-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="value"
                        id="value"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    class="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
                    type="submit"
                >
                    Crea
                </button>
            </form>
        </div>

    );

};

export default AddBody;
