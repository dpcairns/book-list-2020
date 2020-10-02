// import functions and grab DOM elements
import { createBookLi } from './utils.js';
import { thousandsOfBooks } from './data.js';

// what if we want to render tons of books?

// SIDE EFFECT
const list = document.getElementById('book-list');
    
for (let i = 0; i < thousandsOfBooks.length; i++) {
    const singleBook = thousandsOfBooks[i];
    const li = createBookLi(singleBook);

    list.appendChild(li);
}