import React from 'react';
import { Link, Outlet} from "react-router-dom";
import Button from './Button';
import Title from './Title'
import '../App.css';


const Home = () => {
 
    return (
        <section className='app'>
            <Title />
            <section className='buttons'>
                <Link to="/allbooks">
                    <img src={`https://img.freepik.com/free-vector/books-with-children-white-background_1308-20924.jpg?w=2000`} alt="animal"/>
                    <h2>Books for all</h2>
                    {/* <Button name={"Books for all "}></Button> */}
                    </Link>
                <Link to="/age7">
                    {/* <Button name={"Books for age 5-7 "}></Button> */}
                    <img src={`https://i.pinimg.com/736x/fd/90/ce/fd90cec447319d7404ef841f1becb874.jpg`} alt="animal"/>
                    <h2>Books for age 5-7</h2>
                    </Link>
                <Link to="/age10">
                <img src={`https://as1.ftcdn.net/v2/jpg/01/45/94/38/1000_F_145943800_BwwpjBI2gf4vyJuEB5BpNsIyqCwHh7Xi.jpg`} alt="animal"/>
                <h2>Books for age 8-10</h2>
                    {/* <Button name={"Books for age 8-10 "}></Button> */}
                    </Link>                 
            </section>             
            <Outlet /> 
        </section>
    );}

export default Home;