let bookList = [];

const getBooks = async (bookUrl) => {
    const response = await  fetch(bookUrl,{mode:'cors'})
    bookList = await response.json();
 
    return bookList;
}
 
const searchBooks = (e) => {       
    let searchString = `http://localhost:3000/search/${e.target.name}?value=${e.target.value}`
    getBooks(searchString);
}

module.exports = { getBooks, searchBooks }