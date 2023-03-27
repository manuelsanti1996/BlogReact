import React from 'react'

const CardHero = (props) => {
    const { title, description, bgimage } = props
    return (
        <div className="flex flex-col justify-end h-80 p-4 m-4 rounded-md" style={{ backgroundImage: `url('${bgimage}')` }}>
            <div>
                <p className='text-white font-bold tracking-wider'>{title}</p>
                <section className='text-white'>
                    {description}
                </section>
            </div >
        </div >
    )
}

export default CardHero
