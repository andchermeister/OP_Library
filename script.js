const myLibrary = [];

function Book(title, author, numOfPgs, readStatus) {
    this.title = title;
    this.author = author;
    this.numOfPgs = numOfPgs;
    this.readStatus = readStatus;
};

Book.prototype.toggleRead = function() {
    this.readStatus = !this.readStatus;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

function addBookToLibrary(title, author, numOfPgs, readStatus) {
    const book = new Book(title, author, numOfPgs, readStatus);
    myLibrary.push(book);
    displayBooks();
};

function displayBooks() {
    const libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <b>Title:</b> ${book.title} <br>
            <b>Author:</b> ${book.author} <br>
            <b>Number of pages:</b> ${book.numOfPgs} <br>
            <b>Read status:</b> ${book.readStatus ? "Read" : "Not read"} <br>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleRead(${index})">Toggle Read</button>
        `;
        libraryList.appendChild(bookItem);
    });
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
};


document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numOfPgs = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, numOfPgs, read);
    this.reset();
});

let newBookBtn = document.querySelector('#bookBtn');
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector('#book-form');
    newBookForm.style.display = "block";
});
