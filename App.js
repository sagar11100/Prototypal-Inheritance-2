const books = require('./Book.js');

const bookSummaries = books.map(book => book.getSummary());

console.log(bookSummaries);