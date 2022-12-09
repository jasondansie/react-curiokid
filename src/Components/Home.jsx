
import React from 'react';
import { Link} from "react-router-dom";

import Title from './Title'
import './Home.css';

const Home = () => {           
    return (
        <section className='home'>
            <Title />
            <section className='buttons'>
                <Link to="/allbooks">
                    <img src='https://img.freepik.com/free-vector/books-with-children-white-background_1308-20924.jpg?w=900&t=st=1670588465~exp=1670589065~hmac=a321df0f7f6975427d4fa530f43c89b7ff9681c25c35a26eefb560f502f1cca3' alt="kids"></img>
                    <h2>Books for all</h2>
                    
                    </Link>
                <Link to="/age7">
                <img src='https://img.freepik.com/free-vector/children-reading-books-white-background_1308-99595.jpg?w=996&t=st=1670588346~exp=1670588946~hmac=b8163ddfe423d19acbc43987c6189b4398dfa1dde10aa53dfc5ac970331931a4' alt="kids"></img>
                    <h2>Books for age 5-7</h2>
                   
                    </Link>
                <Link to="/age10">
                <img src='https://img.freepik.com/free-vector/boy-girl-reading-book_1308-50995.jpg?w=1800&t=st=1670588280~exp=1670588880~hmac=99ef4db58d786c1262c91bf1961829d728fb2e23abe19a36d9452a9617ef9de6' alt="kids"></img>
                    <h2>Books for age 8-10</h2>
                   
                    </Link>                                
            </section>                           
        </section>
    );  
}

export default Home;