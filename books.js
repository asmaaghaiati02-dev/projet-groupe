let books = JSON.parse(localStorage.getItem("books")) || [];

displayBooks();

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  const book = {
    id: Date.now(),
    title: title,
    author: author
  };

  books.push(book);
  saveBooks();
  displayBooks();

  this.reset();
});

function displayBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${book.title} - ${book.author}
      <button onclick="deleteBook(${book.id})">❌</button>
    `;
    list.appendChild(li);
  });
}

function deleteBook(id) {
  if (confirm("Supprimer ce livre ?")) {
    books = books.filter(book => book.id !== id);
    saveBooks();
    displayBooks();
  }
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

