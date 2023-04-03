import React from 'react'

const CardHero = (props) => {
    const { title, description, bgimage, margin, height, borderRadius } = props
    const style = {
        backgroundImage: `url('${bgimage}')`,
        margin: margin,
        height: height,
        borderRadius: borderRadius
    }
    return (
        <div className="flex flex-col justify-end  p-4" style={style}>
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
