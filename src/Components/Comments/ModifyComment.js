import React,{useState,useEffect} from 'react'
import { useSearchParams } from "react-router-dom";

const ModifyComment = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState(undefined);
    const [comment, setComment] = useState({
        name: "",
        text: "",
    });

    useEffect(() => {
        const id = searchParams.get("id")
        getDataComment(parseInt(id));
    }, []);;
    const getDataComment = async (id) => {
        const res = await fetch(`http://localhost:8000/articles?id=${id}`)
        const data = await res.json()
        setData(data[0]);
    }
    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = searchParams.get("id")
        fetch(`http://localhost:8000/articles/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        }).then(() => {
            console.log("Comment modified");

        });
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={comment.name}
                onChange={handleChange}
            />
            <label htmlFor="text">Text</label>
            <input
                type="text"
                name="text"
                id="text"
                value={comment.text}
                onChange={handleChange}
            />
            <button>Modify Comment</button> 
        </form>

    </div>
  )
}

export default ModifyComment
