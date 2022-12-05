import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Booklist from './Components/Booklist';
import './Components/Home.css';


const App = () => {
  
  
    return (
      <BrowserRouter>       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allbooks' element={<Booklist
            allBooks= {"allbooks"}
          />} />
          <Route path='/age7' element={<Booklist
            age7= {"age7"}
          />} />
          <Route path='/age10' element={<Booklist
            age10= {"age10"}
          />} />
        </Routes>          
    </BrowserRouter>
    );
  }

export default App;