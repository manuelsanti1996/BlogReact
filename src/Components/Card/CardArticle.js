import React, { useEffect } from 'react'
import { Link } from "react-router-dom"



const CardArticle = (props) => {

    const { id, title, description, image } = props;
    console.log(id)
    return (
        <div className=" flex  m-4 ml-0 justify-center items-center">
            <div className=" w-60  bg-white rounded-xl ">
                <img className='h-40 object-cover rounded-xl' src={image} />
                <div>
                    <h2 className='font-bold text-lg'>{title}</h2>
                    <p className='text -sm text-gray-600'>{description}</p>
                </div>
                <div className='flex  justify-between'>
                    <div>
                        <a role="button" href="" className=''>Vai all'articolo</a>
                    </div>
                    <Link to={`/article/details?id=${id}`}>
                        ➝
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default CardArticle


