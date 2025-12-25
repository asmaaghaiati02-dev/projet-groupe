let authors = JSON.parse(localStorage.getItem("authors")) || [];

displayAuthors();

document.getElementById("authorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("authorName").value;

  authors.push({
    id: Date.now(),
    name
  });

  saveAuthors();
  displayAuthors();
  this.reset();
});

function displayAuthors() {
  const list = document.getElementById("authorList");
  list.innerHTML = "";

  authors.forEach(author => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${author.name}
      <button onclick="deleteAuthor(${author.id})">❌</button>
    `;
    list.appendChild(li);
  });
}

function deleteAuthor(id) {
  authors = authors.filter(a => a.id !== id);
  saveAuthors();
  displayAuthors();
}

function saveAuthors() {
  localStorage.setItem("authors", JSON.stringify(authors));
}
