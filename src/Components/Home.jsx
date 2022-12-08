import React from 'react';
import { Link, Outlet} from "react-router-dom";
import Button from './Button';
import Title from './Title'
import '../App.css'

const Home = () => {
 
    return (
        <section className='app'>
            <Title />
            <section className='buttons'>
                <Link to="/allbooks">
                    <img src={`https://source.unsplash.com/500x400/?mammal`} alt="animal"/>
                    {/* <Button name={"Books for all "}></Button> */}
                    </Link>
                <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>                 
            </section>             
            <Outlet /> 
        </section>
    );}

export default Home;