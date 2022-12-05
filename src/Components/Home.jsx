import React, { Component} from 'react';
import { Link, Outlet} from "react-router-dom";
import Button from './Button';
import Title from './Title'
import '../App.css'

const { getBooks } = require('../server/bookLibrary');

class Home extends Component {

    state = {
        allBooks: [],
        search: '',
      }
    
    searchHandler = (e) => {
    this.setState({search: e.target.value});
    console.log("clicked");
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
 
    render(){

        console.log("bookList", this.state.allBooks);  
        return (
            <section className='app'>
                <Title />
                <section className='buttons'>
                    <Link to="/allbooks"><Button name={"Books for all "} onClick={ this.getAllBooks } allbooks={this.state.allBooks}></Button></Link>
                    <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                    <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>                 
                </section>             
                <Outlet /> 
            </section>
        );
    }
}

export default Home;