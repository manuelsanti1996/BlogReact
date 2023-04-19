
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ArticleBody from '../Components/Article/ArticleBody';
import ModifyArticle from '../Components/CrudArticles/ModifyArticle';
import DeleteArticle from '../Components/CrudArticles/DeleteArticle';
import CardCommentList from '../Components/Comments/CardCommentList';
import Delete from "../Components/Article/DeleteElementBody";
import AddBody from "../Components/Article/AddElementBody";
import CardSection from "../Components/Card/CardSection";
import DeleteComment from '../Components/Comments/DeleteComment'
import AddComment from '../Components/Comments/CreateComment'
import ModifyComment from '../Components/Comments/ModifyComment'


const ArticleTemplate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState(undefined);



  useEffect(() => {
    const id = searchParams.get("id");
    getDataArticle(parseInt(id));
  }, [searchParams]);

  const getDataArticle = async (id) => {
    const res = await fetch(`http://localhost:8000/articles?id=${id}`)
    const data = await res.json()
    setData(data[0]
    )
  }



  const DataFunction = () => getDataArticle(data.id)

  return (
    (typeof data !== "undefined")
      ? <div>
        <div className='flex justify-between'>
          <div className=' m-4'>
            <Link to="/"><img src='../../images/logo.jpeg' alt='' style={{ height: 40, width: 40, marginTop: 10 }} /></Link>
          </div>
          <ModifyArticle data={data} setData={setData} />

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
        <p className='font-bold text-2xl p-5'>Sezione di Modifica Elementi</p>
        <Delete OnDeleteElementBody={DataFunction} />
        <AddBody OnAddElementBody={DataFunction} />
        <p className='font-bold text-2xl p-5'>Commenti</p>
        <CardCommentList data={data} />
        <p className='font-bold text-2xl p-5'>Sezione di Modifica Commenti</p>
        <AddComment onCommentCreated={DataFunction} />
        <ModifyComment onCommentModify={DataFunction} />
        <DeleteComment onCommentDeleted={DataFunction} />
        <DeleteArticle />
      </div>
      : null
  )

}

export default ArticleTemplate;


