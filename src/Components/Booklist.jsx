import React, {Component} from 'react';
import { Link} from "react-router-dom";
import Search from './Search';
import Button from './Button';
import Title from './Title';
import Card from './Card';
import '../App.css';
import './Card.css'

const { getBooks } = require('../server/bookLibrary');

class Booklist extends Component {
    state = {
        allBooks: [],
        isLoading: false,
      }

      
    searchHandler = (e) => {
    this.setState({search: e.target.value});
    console.log("clicked");
    }
    
    getAllBooks =  () => {
        this.setState(
            {isLoading: true}
            )
        console.log("clicked");
        
        getBooks('http://localhost:3030/books').then((bookList) =>{   
            this.setState(
                {allBooks: bookList}
            ) 
        })  
    }
      
    showRangeOfBooks = (bookAge) => {
        this.setState(
            {isLoading: true}
            )
        let foundBooks = [];
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

    refershPage = () => {
        window.location.reload(false);
    }

    getBookList = () => {
        console.log("props",this.props.params);
       

        if (this.props.params === "allbooks") {
            console.log("finding all books");
            this.getAllBooks();
            
        }
        if (this.props.params === "age7") {
            console.log("finding books  ages 5-7");
            this.showRangeOfBooks(7);
        }
        if (this.props.params === "age10") {
            console.log("finding books  ages 8-10");
            this.showRangeOfBooks(8);
        } 
        console.log("props2",this.props.params);
        this.setState(
            {isLoading: false}
            )
        
    }

    componentDidMount() {
        this.getBookList();
        this.setState(
            {isLoading: false}
            )
     }

    displayBooks = this.state.allBooks.map((book) => {
        return (
        <Card 
        key = {book.id}
        image= {book.image}
        title= {book.title}
        author= {book.author}
        />
        )
    });
 
    render() {
        
        console.log("books",this.state.allBooks)
    return (
        <div>
            <div className='app'> 
                <Title /> 
                <Search />      
                <div className='buttons'>
                    <Link to="/allbooks"><Button name={"Books for all"} onClick={this.getBookList}></Button></Link>
                    <Link to="/age7"><Button name={"Books for age 5-7"} onClick={this.getBookList}></Button></Link>
                    <Link to="/age10"><Button name={"Books for age 8-10"} onClick={this.getBookList}></Button></Link>      
                </div>
                <div className="bookCards">                 
                    if (this.state.allBooks != "") {
                        this.state.allBooks.map((book) => {
                            return (
                            <Card 
                            key = {book.id}
                            image= {book.image}
                            title= {book.title}
                            author= {book.author}
                            />
                            )
                        })
                    }    
                </div>
            </div>
        </div>
    );  
}
}  


export default Booklist;