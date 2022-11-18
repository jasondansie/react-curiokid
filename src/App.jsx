import React, { Component } from 'react';
import './App.css'
import Title from './Title';
import Button from './Button';
import Search from './Search';
import Card from './Card';

const { getBooks } = require('./server/bookLibrary');

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

    console.log(this.state.allBooks);
  
    return (
      <div className='app'>
        <Title/>
        <div className="inputs">
          <Search searchHandler={this.searchby}/>
          <Button name={"Show All Books"} showBooks= {this.getAllBooks}/>
          <Button name={"Show 5-7 books"} showBooks= {() => this.showRangeOfBooks(7)}/>
          <Button name={"Show 8-10 books"} showBooks= {() => this.showRangeOfBooks(8)}/>
        </div>
        <div className="bookCards">
          {displayBooks}
        </div>
      </div>
    );
  }
}

export default App;