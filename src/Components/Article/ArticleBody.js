import { useEffect } from 'react'
import ImageBody from './ImageBody'
import ParagraphBody from './ParagraphBody'
import QuoteBody from './QuoteBody'

const ArticleBody = ({ data }) => {

    useEffect(() => {
        console.log(data?.body)
    }, [data?.body])

    return (
        <div>
            {data?.body?.map((item, index) => {
                if (item.type === "image") {
                    return <ImageBody key={index} image={item.src} />
                } else if (item.type === "paragraph") {
                    return <ParagraphBody key={index} textValue={item.textValue} />
                } else if (item.type === "quote") {
                    return <QuoteBody key={index} text={item.textValue} author={item.author} />
                }
            })}
        </div>
    )
}

export default ArticleBody;
