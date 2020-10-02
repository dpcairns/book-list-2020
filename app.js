// import functions and grab DOM elements

// initialize state

// DATA MODELING
const book = {
    title: 'For Cat, By Cats: A Cat\'s World',
    price: '$6.99',
    cover: 'http://www.placekitten.com/100/100',
    author: 'Ignatius L Purrington',
    isOnSale: true
};

const anotherBook = {
    title: 'Harry Potter: The Little Wizard of London',
    price: '$6.99',
    cover: 'https://www.placecage.com/100/100',
    author: 'R. L. Stein',
    isOnSale: false
};

// Let's create a book
// li class='book'
// SHOULD BE THE PARENT
const li = document.createElement('li');

li.classList.add('book');
// div class='price', textContent "what the price is": book.price
const div = document.createElement('div');

div.textContent = book.price;
div.classList.add('price');

// p class="title", textContent book.title
const titlePTag = document.createElement('p');

titlePTag.textContent = book.title;
titlePTag.classList.add('title');

// img class="cover", src book.cover
const img = document.createElement('img');

img.classList.add('cover');
img.src = book.cover;

// p class="author", textContent book.author
const authorPTag = document.createElement('p');

authorPTag.textContent = book.author;
authorPTag.classList.add('author');

li.appendChild(div);
li.appendChild(titlePTag);
li.appendChild(img);
li.appendChild(authorPTag);

const list = document.getElementById('book-list');

list.appendChild(li);

// set event listeners to update state and DOM