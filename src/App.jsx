import React, { Component } from 'react';
import './App.css'
import Title from './Title';
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
  render() {
    const bookFilter = this.state.books.filter(book => {
      return book.title
      .toLowerCase()
      .includes(this.state.search.toLowerCase())
    });
    const bookList = bookFilter.map((book) => {
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
      <div>
        <Title/>
        <Search searchHandler={this.searchHandler}/>
        <div className="bookCards">
          {bookList}
        </div>
      </div>
    );
  }
}

export default App;