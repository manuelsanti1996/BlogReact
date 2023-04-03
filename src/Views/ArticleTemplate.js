
import CardsListComment from '../Components/Card/CardsListComment'
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { articleData } from "../data"
import PropTypes from 'prop-types';
import CardBody from '../Components/Card/CardBody';


const CardSection = (props) => {
  const { style, title, description } = props;

  return (
    <div style={style}>
      <h1 className="  font-bold text-2xl">{title}</h1>
      <CardBody description={description} />
    </div>
  );

};

CardSection.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};



const ArticleTemplate = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();

  useEffect(() => {
    const id = searchParams.get("id")
    getData(parseInt(id));
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);



  const getData = (id) => {
    articleData.map((data) => {
      console.log(data.id, id)
      if (data.id === id) {
        setData(data);
      }
    })
  }
  console.log(data?.image)
  return (
    <div>
      <div className='py-4 ml-4 mr-4'>
        <img src='../../images/logo.jpeg' alt='' style={{ height: 40, width: 40, }} />
      </div>
      <div>
        {data && (
          <img
            className='h-320 w-full'
            src={data?.image}
            alt=''
          />
        )}
      </div>
      <CardSection
        title={data?.title}
        description={data?.description}
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}

      />

      <p className='font-bold text-2xl p-5'>Commenti</p>
      <CardsListComment />

    </div>
  )
}

export default ArticleTemplate

