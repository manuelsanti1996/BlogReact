import CardsListComment from '../Components/Card/CardsListComment'
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { articleData } from "../data"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import ArticleBody from '../Components/Article/ArticleBody';

const CardSection = (props) => {
  const { style, title } = props;

  return (
    <div style={style}>
      <h1 className="  font-bold text-2xl">{title}</h1>
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

  return (
    <div>
      <div className='py-4 ml-4 mr-4'>
        <Link to="/"><img src='../../images/logo.jpeg' alt='' style={{ height: 40, width: 40, }} /></Link>
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
        style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}
      />
      <ArticleBody data={data} />

      <p className='font-bold text-2xl p-5'>Commenti</p>
      <CardsListComment />

    </div>
  )
}

export default ArticleTemplate

