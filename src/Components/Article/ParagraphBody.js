import React from 'react'

const ParagraphBody = ({ textValue }) => {
    return (
        <div>
            <p className="font-sans text-base leading-6 text-gray-800 m-5">
                {textValue}
            </p>
        </div>
    )
}

export default ParagraphBody
