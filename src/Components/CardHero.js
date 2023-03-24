import React from 'react'

const CardHero = () => {
    return (
        <div className="flex flex-col justify-end h-80 p-4 m-4 rounded-md" style={{ backgroundImage: 'url("sfondo.jpeg")' }}>
            <div>
                <p className='text-white font-bold tracking-wider'>Titolo Articolo</p>
                <section className='text-white'>
                    Lorem ipsum dolor sit amet,consectetur  adipiscing elitsed do eiusmod tempor incidunt
                </section>
            </div>
        </div>
    )
}

export default CardHero
