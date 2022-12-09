import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Booklist from './Components/Booklist';
import Layout from './pages/Layout';

const App = () => { 
  return (
    <BrowserRouter>       
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/:pageType' element={<Booklist />} />
        </Route>
      </Routes>         
    </BrowserRouter>
  );
}

export default App;