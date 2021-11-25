//UI object
const ui = new UI();
// event elements
const form = document.querySelector('form');

// events
form.addEventListener('submit', addBook);

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book
    const book = new Book(title, author, isbn);
    console.log(book)
    ui.addBook(book);
    console.log(ui)

    //addBookToLocalStorage(book);
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}
