import Archive from './Views/Archive';
import ArticleTemplate from './Views/ArticleTemplate';
import Contacts from './Views/Contacts';
import Home from './Views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/article/details' element={<ArticleTemplate />} />
        <Route exact path='/archive' element={<Archive />} />
        <Route exact path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>

  );
}

export default App;

///buona norma fare un file di rotte alla quale si fa riferimento