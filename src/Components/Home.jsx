
import React from 'react';
import { Link} from "react-router-dom";
import Button from './Button';
import Title from './Title'
import './Home.css';

const Home = () => {           
    return (
        <section className='home'>
            <Title />
            <section className='buttons'>
                <Link to="/allbooks"><Button name={"Books for all "} ></Button></Link>
                <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>                                
            </section>                           
        </section>
    );  
}

export default Home;