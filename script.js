class Book {
    constructor(title, author, numOfPgs, readStatus) {
        this.title = title;
        this.author = author;
        this.numOfPgs = numOfPgs;
        this.readStatus = readStatus;
    };

    toggleRead() {
        this.readStatus = !this.readStatus;
    };
}

class Library {
    constructor() {
        this.myLibrary = [];
    };

    addBookToLibrary(title, author, numOfPgs, readStatus) {
        const book = new Book(title, author, numOfPgs, readStatus);
        this.myLibrary.push(book);
        this.displayBooks();
    };

    displayBooks() {
        const libraryList = document.getElementById('libraryList');
        libraryList.innerHTML = '';
    
        this.myLibrary.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <b>Title:</b> ${book.title} <br>
                <b>Author:</b> ${book.author} <br>
                <b>Number of pages:</b> ${book.numOfPgs} <br>
                <b>Read status:</b> ${book.readStatus ? "Read" : "Not read"} <br>
                <button onclick="library.removeBook(${index})">Remove</button>
                <button onclick="library.toggleRead(${index})">Toggle Read</button>
            `;
            libraryList.appendChild(bookItem);
        });
    };

    toggleRead(index) {
        this.myLibrary[index].toggleRead();
        this.displayBooks();
    };

    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.displayBooks();
    };


};

const library = new Library();

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numOfPgs = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    library.addBookToLibrary(title, author, numOfPgs, read);
    this.reset();
});

let newBookBtn = document.querySelector('#bookBtn');
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#book-form');
    newBookForm.style.display = "block";
});
