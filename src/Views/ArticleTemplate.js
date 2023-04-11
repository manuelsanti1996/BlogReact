
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import ArticleBody from '../Components/Article/ArticleBody';
import ModifyArticle from '../Components/CrudArticles/ModifyArticle';
import DeleteArticle from '../Components/CrudArticles/DeleteArticle';
import CardCommentList from '../Components/Comments/CardCommentList';
import ModifyComment from "../Components/Comments/ModifyComment";
import CreateComment from "../Components/Comments/CreateComment";
import Delete from "../Components/Article/DeleteElementBody";


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
  useEffect(() => {
    const id = searchParams.get("id")
    getDataArticle(parseInt(id));
  }, []);;

 

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
          <Delete />
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
        <CardCommentList data={data} />
        <ModifyComment />
        <CreateComment />
        <DeleteArticle />
      </div>
      : null
  )
}

export default ArticleTemplate;


