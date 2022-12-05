import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Search from './Search';
import Button from './Button';
import Title from './Title';
import Card from './Card';
import '../App.css';

const { getBooks } = require('../server/bookLibrary');

class Booklist extends Component  {

    state = {
        allBooks: [],
        search: '',
      }
    
    searchHandler = (e) => {
    this.setState({search: e.target.value});
    }
    
    getAllBooks =  () => {
    
    console.log("clicked");
    
    getBooks('http://localhost:3030/books').then((bookList) =>{
        this.setState(
        {allBooks: bookList}
        ) 
    })   
    }
      
    sendBooks =  (pageType) => {
    console.log("clicked");
    return pageType;
    }

    showRangeOfBooks = (bookAge) => {
    let foundBooks = [];
    console.log("age", bookAge);
    getBooks('http://localhost:3030/books').then((bookList) =>{
        this.setState(
        bookList.forEach(book => {
            if (bookAge === 7) {
                if(book.age <= bookAge) {
                foundBooks.push(book);
            }  
            }
            else if (book.age >= 8 && book.age <= 10) {
            foundBooks.push(book);
            }

            this.setState(
            {allBooks: foundBooks}
            )     
        })
        ) 
    })   
    }
    
    searchby =  (e) => {
    this.setState({search: e.target.value});
    getBooks('http://localhost:3030/books').then((bookList) => {
        let foundBooks = bookList.filter(book => book.title.toLowerCase().includes(this.state.search) || book.author.toLowerCase().includes(this.state.search));
        this.setState(
        {allBooks: foundBooks}
        )  
    })
    }
    
    render() {  

        const displayBooks = this.state.allBooks.map((book) => {
            return (
            <Card 
            key = {book.id}
            image= {book.image}
            title= {book.title}
            author= {book.author}
            />
            )
        });
       // console.log("props:", props.allBooks);
        
        return (
            <div>
                <div className='app'> 
                    <Title /> 
                    <Search />      
                    <div className='buttons'>
                        <Link to="/allbooks"><Button name={"Books for all "} onClick={  this.getAllBooks}></Button></Link>
                        <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                        <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>  
                    </div>
                
                </div>
            </div>
        );
    };   
}

export default Booklist;