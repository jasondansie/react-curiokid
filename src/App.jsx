import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Booklist from './Components/Booklist';
import './Components/Home.css';
import Layout from './pages/Layout';
import About from './Components/About';


const App = () => { 
  return (
    <BrowserRouter>       
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/:pageType' element={<Booklist />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>         
    </BrowserRouter>
  );
}

export default App;