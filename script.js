const bookCard = document.getElementById('bookCard');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalClose = document.querySelector('.close');
const form = document.getElementById('forms');
const addNewBookBtn = document.getElementById('addNewBook');

let books = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function createBookCard(book, num) {
    const bookElement = document.createElement('div');
    bookElement.classList.add("book-card");

    const name = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        books.splice (num, 1);
        renderBooks();
    })

    name.textContent = `Название: ${book.name}`;
    author.textContent = `Автор: ${book.author}`;
    pages.textContent = `Страниц: ${book.pages}`;
    bookElement.append(name, author, pages, deleteBtn);

    return bookElement;
}

function renderBooks() {
    bookCard.innerHTML = "";
    /*bookCard.textContent = " ";*/

    books.forEach((book, num) => {
        bookCard.append(createBookCard(book, num));
    });
}

addNewBookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookName = document.getElementById('bookName').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookPages = document.getElementById('bookPages').value;

    const newBook = new Book(bookName, bookAuthor, bookPages);

    books.push(newBook);

    renderBooks();

    form.reset();
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});

const modalInputs = document.querySelectorAll('#modal input');
modalInputs.forEach(input => {
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});





