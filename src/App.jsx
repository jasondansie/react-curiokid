import React, { Component } from 'react';
import './App.css'
import Title from './Title';
import Button from './Button';
import Search from './Search';
import Card from './Card';

const { getBooks, searchBooks } = require('./server/bookLibrary');

class App extends Component {
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

  showAllBooks = async () => {
     await this.getAllBooks.then(
      this.setState(
        {allBooks: this.state.allBooks}
      )     
     )
     
  }

  show5_7books = () => {
    let foundBooks = [];

    getBooks('http://localhost:3030/books').then((bookList) =>{
      this.setState(
        bookList.forEach(book => {
          if (book.age <= 7) {
            foundBooks.push(book);
          }

          this.setState(
            {allBooks: foundBooks}
          )     
        })
      ) 
    })   
  }

  show8_10books = () => {
    let foundBooks = [];

    getBooks('http://localhost:3030/books').then((bookList) =>{
      this.setState(
        bookList.forEach(book => {
          if (book.age >= 8 && book.age <= 10) {
            foundBooks.push(book);
          }

          this.setState(
            {allBooks: foundBooks}
          )     
        })
      ) 
    })   

  }

  searchby =  () => {

    const bookarray =   getBooks('http://localhost:3030/search/byauthor?value=Jill Tomlinson')

    this.setState(
      {books: bookarray}
    );
   
    
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

 /*
    const bookAuthorFilter = this.state.books.filter(book => {
      return book.author
      .toLowerCase()
      .includes(this.state.search.toLowerCase())
    });
    const bookListbyTitle = bookTitleFilter.map((book) => {
      return (
        <Card 
        key = {book.id}
        image= {book.image}
        title= {book.title}
        author= {book.author}
        />
      )
    })
     
    const bookListbyAuthor = () => {
       this.state.books.map((book) => {
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
  */
    console.log(this.state.allBooks);
  
    return (
      <div className='app'>
        <Title/>
        <div className="inputs">
          <Search searchHandler={this.searchby}/>
          <Button name={"Show All Books"} showBooks= {this.getAllBooks}/>
          <Button name={"Show 5-7 books"} showBooks= {this.show5_7books}/>
          <Button name={"Show 8-10 books"} showBooks= {this.show8_10books}/>
        </div>
        <div className="bookCards">
          {displayBooks}
        </div>
      </div>
    );
  }
}

export default App;