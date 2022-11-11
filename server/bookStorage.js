'use strict';

const books = require('./bookList.json');

function getAllBooks(){
    return books;
}

function getBook(key, value){
    const found = [];
    if (key && value) {
        for(const book of books){
            if (book[key] === value) {
                found.push(book);
            }
        }
    }
    return found;
}

module.exports = { getAllBooks, getBook }