// Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class
class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // create element
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    target.parentElement.parentElement.remove();
  }
}

// Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  // validate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert('Book Added!', 'success');
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.className === 'delete') {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
  }
  e.preventDefault();
})
