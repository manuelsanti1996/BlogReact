import React from 'react'

import CardComment from './CardComment'

const CardsListComment = ({ data }) => {
  return (
    (typeof data !== "undefined")
      ? <div>
        <div className='flex flex-wrap'>
          {data.map((item) => (
            <CardComment
              name={item?.name}
              comment={item?.comment}
            />
          ))}
        </div>
      </div>
      : null
  )
}

export default CardsListComment
