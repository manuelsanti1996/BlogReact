import ArticleTemplate from './Views/ArticleTemplate';
import Home from './Views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/article/details' element={<ArticleTemplate />} />
      </Routes>
    </Router>

  );
}

export default App;

///buona norma fare un file di rotte alla quale si fa riferimento