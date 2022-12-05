import React from 'react';
import Button from './Button';
// import Books from './Books';

import './Home.css';

const Home = (props) => {
 
    return (
        
        <div className='home'>
            
        <div className='buttons'>
        <Button name={"Books for all "} onClick= {props.allBooks}/>
        <Button name={"Books for age 5-7 "} onClick= {props.age7}/>
        <Button name={"Books for age 8-10"} onClick= {props.age10}/>
            
        </div>
        </div>
    );
    }

export default Home;