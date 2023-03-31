import React from 'react' 
import {CommentData} from "../../data"
import CardComment from './CardComment'

const CardsListComment = () => {
  return (
    <div>
        <div className='flex flex-wrap'>
        {CommentData.map(comment => (
                <CardComment
                    name={comment.name}
                    comment={comment.comment}
                />
            ))}
        </div>
    </div>
  )
}

export default CardsListComment
