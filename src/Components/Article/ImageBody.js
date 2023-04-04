import React from 'react'

const ImageBody = ({ image }) => {
    return (
        <div className="max-w-4xl mx-auto my-8">
            <img src={image} alt="Blog Image" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
    )
}

export default ImageBody
