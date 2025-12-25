let books = JSON.parse(localStorage.getItem("books")) || [];

displayBooks();

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("bookId").value;
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  if (id) {
    // MODIFIER
    const book = books.find(b => b.id == id);
    book.title = title;
    book.author = author;
  } else {
    // AJOUTER
    books.push({
      id: Date.now(),
      title,
      author
    });
  }

  saveBooks();
  displayBooks();
  this.reset();
  document.getElementById("bookId").value = "";
});

function displayBooks(filteredBooks = books) {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  filteredBooks.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${book.title}</strong> - ${book.author}
      <button onclick="editBook(${book.id})">✏️</button>
      <button onclick="deleteBook(${book.id})">❌</button>
    `;
    list.appendChild(li);
  });
}

function editBook(id) {
  const book = books.find(b => b.id === id);
  document.getElementById("bookId").value = book.id;
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
}

function deleteBook(id) {
  if (confirm("Supprimer ce livre ?")) {
    books = books.filter(book => book.id !== id);
    saveBooks();
    displayBooks();
  }
}

function sortByTitle() {
  books.sort((a, b) => a.title.localeCompare(b.title));
  displayBooks();
}

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(value) ||
    book.author.toLowerCase().includes(value)
  );
  displayBooks(filtered);
});

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}


