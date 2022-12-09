import { useState, useEffect } from 'react';
import { Link, useParams} from "react-router-dom";
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

        const getAllBooks =  () => {    
            getBooks('http://localhost:3030/books').then((fetchedBookList) =>{   
                setAllBookList(fetchedBookList);
                setBookList(allBooksList);
            })  
        }
        
       getBookList(params.pageType);
    }, [params.pageType, allBooksList]);
    
    
    const showRangeOfBooks = (bookAge) => {       
        let foundBooks = [];    
        getBooks('http://localhost:3030/books').then((fetchedBookList) =>{   
            fetchedBookList.forEach(book => {
                if (bookAge === 7) {
                    if(book.age <= bookAge) {
                        foundBooks.push(book);
                    }  
                }
                else if (book.age >= 8 && book.age <= 10) {
                    foundBooks.push(book);
                }             
            })
            setBookList(foundBooks)
            })                           
    }

    const searchHandler = (e) => {
        setSearch({
            ...search,
            string: e.target.value,
        });
        let fB = allBooksList.filter(book => 
            book.title.toLowerCase().includes(search.string.toLowerCase()) ||
             book.author.toLowerCase().includes(search.string.toLowerCase())
             );         
        console.log("foundbooks: ", fB);
        setBookList(fB);
           
    }

    const dispalyCards = () =>{
       return bookList.map((book) => (
            <Card
            key = {book.id}
            image= {book.image}
            title= {book.title}
            author= {book.author}
            />
        ))     
    }           

    return (
        <div>
            <div className='app'> 
                <Title />                   
                <div className='inputs'>
                    <Search
                        {...search}
                        searchHandler={searchHandler}
                     />
                    <Link to="/allbooks"><Button name={"Books for all "} ></Button></Link>
                    <Link to="/age7"><Button name={"Books for age 5-7 "}></Button></Link>
                    <Link to="/age10"><Button name={"Books for age 8-10 "}></Button></Link>                 
                </div>               
                <div className="bookCards">
                  {dispalyCards()}                     
                </div>                                                     
            </div>
        </div>
    );  
} 

export default Booklist;