function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

const books = [
    new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954),
    new Book('Pride and Prejudice', 'Jane Austen', 1813),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
];

module.exports = books;