import React from 'react'
import CardComment from './CardComment'

const CardCommentList = ({data}) => {
    return (
        <div className="comment-list">
        {data?.comment?.map((comment) => (
            <CardComment
            key={comment.id}
            name={comment.name}
            text={comment.text}
            />
        ))}
        </div>
    )
}

export default CardCommentList
