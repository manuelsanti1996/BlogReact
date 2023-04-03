const CardTemplate = ({ image }) => {

    return (
        <div >
            <img className='h-40 object-cover rounded-xl' src={image} />
        </div>
    )
}
export default CardTemplate
