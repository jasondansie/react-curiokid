import React from 'react';
import { Link} from "react-router-dom";
import Search from './Search';
import Button from './Button';
import Title from './Title';
import Card from './Card';
import '../App.css';



const Booklist = (props) => {
    // const displayBooks = allbooks.map((book) => {
    //     return (
    //     <Card 
    //     key = {book.id}
    //     image= {book.image}
    //     title= {book.title}
    //     author= {book.author}
    //     />
    //     )
    // });
     console.log("props:", props);
    
    return (
        <div>
            <div className='app'> 
                <Title /> 
                <Search />      
                <div className='buttons'>
                    <Link to="/allbooks"><Button name={"Books for all "}></Button></Link>
                    <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                    <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>  
                </div>
                <div className="bookCards">
                    {/* {displayBooks} */}
                </div>
                </div>
                
        </div>
    );
}  


export default Booklist;