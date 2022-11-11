let bookList = [];

const getBooks = async (bookUrl) => {
    const data = await fetch(bookUrl,{mode:'cors'});

    bookList = await data.json();
    console.log('booklist;',bookList);
    
    displayBooks(bookList);
}
    
const findAllBooks = () => {
    let allbooks = [];

    getBooks(`http://localhost:3000/books`);   

    bookList.forEach(book => {
        allbooks.push(book); 
    });

    displayBooks(allbooks);
} 


const findBooksByAge = (e) => {
    let allbooks = [];

    bookList.forEach(book => {
        switch (e.target.name) {
            case "7":
                if (book.age <= 7) {
                    allbooks.push(book);
                }                 
                break;
                
            case "8":
                if (book.age >= 8) {
                    allbooks.push(book);
                }  
                break;
            
                default:
                break;
        }            
    });

    displayBooks(allbooks);
}

const displayBooks = (bookArry) => {
   
    const book = bookArry.map((book) => {

        return `<div class="container">
                    <div class="book"> 
                        <h5 id="book-name">${book.title}</h5>
                        <img src= ${book.image} alt="${book.title}" width="100px">
                        <div class="author"> 
                            <label>Author:</label> <h5>${book.author}</h5>
                        </div>
                    </div>
                </div>`                 
        
    }).join('');
    
    bookDisplay.innerHTML = book;
}

const searchBooks = (e) => {       
    let searchString = `http://localhost:3000/search/${e.target.name}?value=${e.target.value}`
    getBooks(searchString);
}
