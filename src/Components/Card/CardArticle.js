import React from 'react'

const CardArticle = (props) => {

    const { title, description, image } = props;

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
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.707 4.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L9 7.414V15a1 1 0 102 0V7.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardArticle
