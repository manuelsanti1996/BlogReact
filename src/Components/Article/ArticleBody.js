import { useEffect } from 'react'
import ImageBody from './ImageBody'
import ParagraphBody from './ParagraphBody'
import QuoteBody from './QuoteBody'
import { BODYELEMENT } from '../../Enums'

const ArticleBody = ({ data }) => {

    useEffect(() => {
        console.log(data?.body)
    }, [data?.body])

    const renderBodyElement = (item, index) => {
        switch (item.type) {
            case BODYELEMENT.IMAGE:
                return <ImageBody key={index} image={item.src} />
            case BODYELEMENT.PARAGRAPH:
                return <ParagraphBody key={index} textValue={item.textValue} />
            case BODYELEMENT.QUOTE:
                return <QuoteBody key={index} text={item.textValue} author={item.author} />
            default:
                return null
        }
    }

    return (
        <div className="d-flex justify-content-center p-5">
            {data?.body?.map((item, index) => {
                return renderBodyElement(item, index)
            })}
        </div>
    )
}

export default ArticleBody;
