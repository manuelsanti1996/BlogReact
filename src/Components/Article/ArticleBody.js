
import ImageBody from './ImageBody'
import ParagraphBody from './ParagraphBody'
import QuoteBody from './QuoteBody'


const ArticleBody = ({ data }) => {

  

    const renderBodyElement = (item, index) => {
        switch (item.type) {
            case "image":
                return <ImageBody key={index} image={item.src} />
            case "paragraph":
                return <ParagraphBody key={index} textValue={item.textValue} />
            case "quote":
                return <QuoteBody key={index} text={item.textValue} author={item.author} />
            default:
                return null
        }
    }

    return (typeof data !== "undefined"
        ? <div className="d-flex justify-content-center p-5">
            {data?.body?.map((item, index) => {
                return renderBodyElement(item, index)
            })}
        </div>
        :null
    )
}

export default ArticleBody;
