function updateDashboard() {
  document.getElementById("totalBooks").textContent = books.length;
  document.getElementById("totalAuthors").textContent = authors.length;

  const ctx = document.getElementById("booksChart");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: books.map(b => b.title),
      datasets: [{
        label: 'Livres',
        data: books.map(() => 1)
      }]
    }
  });
}

updateDashboard();
function loadApiBooks() {
  fetch("https://openlibrary.org/search.json?q=javascript")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("apiBooks");
      list.innerHTML = "";

      data.docs.slice(0, 5).forEach(book => {
        const li = document.createElement("li");
        li.textContent = book.title;
        list.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}
