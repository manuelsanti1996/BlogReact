import React from 'react'

const CardArticle = () => {
    return (
        <div className='flex flex-col justify-end m-4 rounded-md max-w-xs h-64 overflow-hidden w-72 md:w-80 lg:w-96'>
            <div>
                <img
                    src="cardarticle.jpg"
                    alt="Article Image"
                    className="object-cover w-full h-48 md:h-56 lg:h-64"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='pt-4 w-full'>
                <p className='text-black font-bold tracking-wider'>Titolo Articolo</p>
                <section className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sit amet nibh posuere tristique.
                </section>
            </div>
            <div className='flex flex-row justify-between w-full mt-4'>
                <div>
                    <a href="/articolo" className="inline-flex items-center justify-center hover:bg-blue-600 text-black font-bold rounded-md transition-colors duration-300">
                        <span>Vai all'articolo</span>
                    </a>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.707 4.293a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L9 7.414V15a1 1 0 102 0V7.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default CardArticle
