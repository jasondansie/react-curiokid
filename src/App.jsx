import React, { Component } from 'react';
import './App.css'
import Title from './Title';
import Button from './Button';
import Search from './Search';
import Card from './Card';
import books from './books';

class App extends Component {
  state = {
    books: books,
    search: '',
  }
  searchHandler = (e) => {
    this.setState({search: e.target.value});
  }
  showAllBook = () => {

  }
  show5_7books = () => {
    
  }
  show8_10books = () => {

  }
  render() {
    const bookTitleFilter = this.state.books.filter(book => {
      return book.title
      .toLowerCase()
      .includes(this.state.search.toLowerCase())
    });
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
    const bookListbyAuthor = bookAuthorFilter.map((book) => {
      return (
        <Card 
        key = {book.id}
        image= {book.image}
        title= {book.title}
        author= {book.author}
        />
      )
    })
    return (
      <div className='app'>
        <Title/>
        <div className="inputs">
          <Search searchHandler={this.searchHandler}/>
          <Button name={"Show All Books"} showBooks= {this.showAllBook}/>
          <Button name={"Show 5-7 books"} showBooks= {this.show5_7books}/>
          <Button name={"Show 8-10 books"} showBooks= {this.show8_10books}/>
        </div>
        <div className="bookCards">
          {bookListbyTitle}
          {bookListbyAuthor}
        </div>
      </div>
    );
  }
}

export default App;