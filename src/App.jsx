import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Components/Home';
import Booklist from './Components/Booklist';
import './Components/Home.css';

const RouterWrapper = (props) => {
  let {pageType} = useParams();
  return <Booklist params={pageType} {...props} />
  

};

const App = () => {
  
  
    return (
      <BrowserRouter>       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:pageType' element={<RouterWrapper />} />
          <Route path='/:pageType' element={<RouterWrapper />} />
          <Route path='/:pageType' element={<RouterWrapper />} />
        </Routes>          
    </BrowserRouter>
    );
  }

export default App;