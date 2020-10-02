// SIDE-EFFECT-FREE FUNCTION!!
// NO MUTATION OF THE DOM
// NO MUTATION OF STATE
// NO MUTATING ANYTHING THAT LIVES OUTSIDE THE FUNCTION

export function createBookLi(book) {
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
    
    return li;
}