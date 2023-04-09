import CardsListComment from '../Components/Card/CardsListComment'
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import ArticleBody from '../Components/Article/ArticleBody';
import ModifyArticle from '../Components/CrudArticles/ModifyArticle';
import DeleteArticle from '../Components/CrudArticles/DeleteArticle';


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
  const [data, setData] = useState(undefined);
  const [datacomments, setDatacomments] = useState(undefined)
  useEffect(() => {
    const id = searchParams.get("id")
    getDataArticle(parseInt(id));
  }, []);;

  useEffect(() => {
    getDataComments()
  }, [])

  const getDataComments = async () => {
    const res = await fetch("http://localhost:8000/comments")
    const datacomment = await res.json()
    setDatacomments(datacomment)
  }


  const getDataArticle = async (id) => {
    const res = await fetch(`http://localhost:8000/articles?id=${id}`)
    const data = await res.json()
    setData(data[0]);
  }

  return (
    (typeof data !== "undefined")
      ? <div>
        <div className='flex justify-between'>
          <div className=' m-4'>
            <Link to="/"><img src='../../images/logo.jpeg' alt='' style={{ height: 40, width: 40, marginTop: 10 }} /></Link>
          </div>
          <ModifyArticle />

        </div>
        <div>
          {data.image && (
            <img
              className='h-320 w-full'
              src={data.image}
              alt=''
            />
          )}
        </div>
        <CardSection
          title={data.title}
          style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}
        />
        <ArticleBody data={data} />

        <p className='font-bold text-2xl p-5'>Commenti</p>

        {datacomments && <CardsListComment data={datacomments} />}

        <DeleteArticle />
      </div>
      : null
  )
}

export default ArticleTemplate;


