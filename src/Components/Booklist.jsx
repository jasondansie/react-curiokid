import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Search from './Search';
import Button from './Button';
import Title from './Title';
import Card from './Card';
import './Booklist.css'

const { getBooks } = require('../server/bookLibrary');

const Booklist = () => {
    const params = useParams();
    const [allBooksList, setAllBookList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [search, setSearch] = useState({
        string: '',
    });

    useEffect(() => {
        setBookList([]);
        setAllBookList([]);
        getBooks('http://localhost:3030/books').then((fetchedBookList) => {
            setAllBookList(fetchedBookList);
        })

    }, []);

    const buttonHandler = () => {
        console.log("pagetype: ", params.pageType);
        getBookList(params.pageType);
    }

    const getAllBooks = () => {
        console.log("setting all books");
        console.log("foundbooks", allBooksList);
        setBookList([]);
        setBookList(allBooksList);
    }

    const showRangeOfBooks = (bookAge) => {
        let foundBooks = [];
        setBookList([]);
        allBooksList.forEach(book => {
            if (bookAge === 7) {
                if (book.age <= bookAge) {
                    foundBooks.push(book);
                }
            }
            else if (book.age >= 8 && book.age <= 10) {
                foundBooks.push(book);
            }
        })
        setBookList(foundBooks);
    }

    const getBookList = (pageType) => {

        if (pageType === "allbooks") {
            getAllBooks();
        }
        if (pageType === "age7") {
            showRangeOfBooks(7);
        }
        if (pageType === "age10") {
            showRangeOfBooks(8);
        }
    }

    const searchHandler = (e) => {
        setSearch({
            ...search,
            string: e.target.value,
        });
        let foundBooks = allBooksList.filter(book =>
            book.title.toLowerCase().includes(search.string.toLowerCase()) ||
            book.author.toLowerCase().includes(search.string.toLowerCase())
        );
        setBookList(foundBooks);
    }

    const displayCards = () => {
        return bookList.map((book) => (
            <Card
                key={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
            />
        ))
    }

    return (
        <section className='bookList'>
            <Title />
            <section className='inputs'>
                <Search
                    {...search}
                    searchHandler={searchHandler}
                />
                <Link to="/allbooks" onClick={buttonHandler}><Button name={"Books for all "} ></Button></Link>
                <Link to="/age7" onClick={buttonHandler}><Button name={"Books for age 5-7 "}></Button></Link>
                <Link to="/age10" onClick={buttonHandler}><Button name={"Books for age 8-10 "}></Button></Link>
            </section>
            <section className="bookCards">
                {displayCards()}
            </section>
        </section>

    );

}

export default Booklist;