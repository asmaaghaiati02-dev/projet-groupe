const initialBooks = [
    {
        id: 1,
        titre: "1984",
        auteur: "George Orwell",
        annee: 1949,
        genre: "Dystopie",
        pages: 328,
        isbn: "9782070368224",
        resume: "Un classique absolu sur la surveillance, la propagande et la résistance."
    },
    {
        id: 2,
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        annee: 1943,
        genre: "Conte philosophique",
        pages: 96,
        isbn: "9782070612758",
        resume: "Une fable universelle sur l'amitié, la perte et le sens de la vie."
    },
    {
        id: 3,
        titre: "L'Étranger",
        auteur: "Albert Camus",
        annee: 1942,
        genre: "Roman philosophique",
        pages: 185,
        isbn: "9782070360020",
        resume: "Le récit de Meursault, qui questionne l'absurdité de l'existence."
    },
    {
        id: 4,
        titre: "Fondation",
        auteur: "Isaac Asimov",
        annee: 1951,
        genre: "Science-Fiction",
        pages: 255,
        isbn: "9782070360532",
        resume: "Une saga spatiale sur la chute d'un empire galactique et la science de l'histoire."
    },
    {
        id: 5,
        titre: "Le Seigneur des Anneaux",
        auteur: "J.R.R. Tolkien",
        annee: 1954,
        genre: "Fantasy",
        pages: 1216,
        isbn: "9782266280011",
        resume: "L'épopée mythique de la Terre du Milieu, entre amitié, guerre et magie."
    },
    {
        id: 6,
        titre: "Dune",
        auteur: "Frank Herbert",
        annee: 1965,
        genre: "Science-Fiction",
        pages: 544,
        isbn: "9782290114789",
        resume: "Sur la planète Arrakis, le contrôle de l'épice mène au pouvoir absolu."
    },
    {
        id: 7,
        titre: "Orgueil et Préjugés",
        auteur: "Jane Austen",
        annee: 1813,
        genre: "Roman",
        pages: 432,
        isbn: "9782070412422",
        resume: "Une satire fine des mœurs et du mariage dans l'Angleterre du XIXe siècle."
    },
    {
        id: 8,
        titre: "Le Nom de la Rose",
        auteur: "Umberto Eco",
        annee: 1980,
        genre: "Roman historique",
        pages: 615,
        isbn: "9782253138731",
        resume: "Une enquête dans une abbaye médiévale, entre théologie et meurtres."
    },
    {
        id: 9,
        titre: "Les Misérables",
        auteur: "Victor Hugo",
        annee: 1862,
        genre: "Roman social",
        pages: 1488,
        isbn: "9782070411432",
        resume: "La lutte pour la rédemption et la justice dans la France du XIXe siècle."
    },
    {
        id: 10,
        titre: "L'Alchimiste",
        auteur: "Paulo Coelho",
        annee: 1988,
        genre: "Conte initiatique",
        pages: 208,
        isbn: "9782266222578",
        resume: "Le voyage d'un berger andalou à la recherche de son trésor personnel."
    }
];

const initialAuthors = [
    { id: 1, nom: "George Orwell", pays: "Royaume-Uni", bio: "Écrivain anglais, auteur de 1984 et La Ferme des animaux." },
    { id: 2, nom: "Antoine de Saint-Exupéry", pays: "France", bio: "Écrivain et aviateur français, auteur du Petit Prince." },
    { id: 3, nom: "Albert Camus", pays: "France", bio: "Écrivain et philosophe français, prix Nobel de littérature 1957." },
    { id: 4, nom: "Isaac Asimov", pays: "États-Unis", bio: "Écrivain américain, célèbre pour ses œuvres de science-fiction." },
    { id: 5, nom: "J.R.R. Tolkien", pays: "Royaume-Uni", bio: "Écrivain et philologue anglais, créateur de la Terre du Milieu." }
];

let books = [];
let authors = [];
let currentBookId = 11;
let currentAuthorId = 6;
let deleteId = null;
let deleteType = null;
let apiSearchCount = 0;
let lastSearchTime = null;

let genreChart = null;
let auteurChart = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadInitialData();
    updateDashboard();
    renderBooks();
    renderAuthors();
});

function initializeApp() {
    const savedBooks = localStorage.getItem('bibliotheca_books');
    const savedAuthors = localStorage.getItem('bibliotheca_authors');
    
    if (savedBooks) {
        books = JSON.parse(savedBooks);
        currentBookId = Math.max(...books.map(b => b.id)) + 1;
    } else {
        books = [...initialBooks];
        saveBooks();
    }
    
    if (savedAuthors) {
        authors = JSON.parse(savedAuthors);
        currentAuthorId = Math.max(...authors.map(a => a.id)) + 1;
    } else {
        authors = [...initialAuthors];
        saveAuthors();
    }
    
    const savedApiCount = localStorage.getItem('bibliotheca_api_count');
    if (savedApiCount) {
        apiSearchCount = parseInt(savedApiCount);
        document.getElementById('api-books-count').textContent = apiSearchCount;
    }
    
    const savedLastSearch = localStorage.getItem('bibliotheca_last_search');
    if (savedLastSearch) {
        lastSearchTime = savedLastSearch;
        document.getElementById('last-search').textContent = formatDate(savedLastSearch);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('active');
    });
    
    document.getElementById('toggle-form-btn').addEventListener('click', toggleBookForm);
    document.getElementById('cancel-form-btn').addEventListener('click', toggleBookForm);
    document.getElementById('livre-form').addEventListener('submit', handleBookSubmit);
    
    document.getElementById('toggle-auteur-form-btn').addEventListener('click', toggleAuthorForm);
    document.getElementById('cancel-auteur-form-btn').addEventListener('click', toggleAuthorForm);
    document.getElementById('auteur-form').addEventListener('submit', handleAuthorSubmit);
    
    document.getElementById('search-btn').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    document.getElementById('sort-select').addEventListener('change', renderBooks);
   
    document.getElementById('api-search-btn').addEventListener('click', searchOpenLibrary);
    document.getElementById('api-search').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchOpenLibrary();
    });
    document.getElementById('add-random-book').addEventListener('click', addRandomBook);

    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);
}

function saveBooks() {
    localStorage.setItem('bibliotheca_books', JSON.stringify(books));
}

function saveAuthors() {
    localStorage.setItem('bibliotheca_authors', JSON.stringify(authors));
}

function loadInitialData() {
    updateStatistics();
    initializeCharts();
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        if (sectionId === 'dashboard') {
            updateDashboard();
        }
    }
}

function toggleBookForm() {
    const form = document.getElementById('livre-form');
    form.classList.toggle('hidden');

    if (!form.classList.contains('hidden')) {
        document.getElementById('edit-id').value = '';
        document.getElementById('livre-form').reset();
        document.getElementById('toggle-form-btn').innerHTML = '<i class="fas fa-times"></i> Annuler l\'ajout';
    } else {
        document.getElementById('toggle-form-btn').innerHTML = '<i class="fas fa-plus"></i> Ajouter un Nouveau Livre';
    }
}

function toggleAuthorForm() {
    const form = document.getElementById('auteur-form');
    form.classList.toggle('hidden');
    
    if (!form.classList.contains('hidden')) {
        document.getElementById('toggle-auteur-form-btn').innerHTML = '<i class="fas fa-times"></i> Annuler l\'ajout';
    } else {
        document.getElementById('toggle-auteur-form-btn').innerHTML = '<i class="fas fa-user-plus"></i> Ajouter un Auteur';
    }
}

function renderBooks() {
    const container = document.getElementById('books-container');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sortBy = document.getElementById('sort-select').value;
    
    let filteredBooks = [...books];
    
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.titre.toLowerCase().includes(searchTerm) ||
            book.auteur.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredBooks.sort((a, b) => {
        switch(sortBy) {
            case 'titre':
                return a.titre.localeCompare(b.titre);
            case 'titre-desc':
                return b.titre.localeCompare(a.titre);
            case 'annee':
                return (a.annee || 0) - (b.annee || 0);
            case 'annee-desc':
                return (b.annee || 0) - (a.annee || 0);
            case 'pages':
                return (a.pages || 0) - (b.pages || 0);
            case 'pages-desc':
                return (b.pages || 0) - (a.pages || 0);
            default:
                return 0;
        }
    });
    
    container.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-book fa-3x text-muted mb-3"></i>
                <h4>Aucun livre trouvé</h4>
                <p>Essayez avec d'autres termes de recherche</p>
            </div>
        `;
        return;
    }
    
    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        container.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    col.innerHTML = `
        <div class="book-card" data-id="${book.id}">
            <div class="book-cover cover-generic">
                <div class="cover-placeholder">
                    <i class="fas fa-book-open fa-3x"></i>
                    <p>${book.genre}</p>
                </div>
            </div>
            <div class="book-header">
                <h4 class="book-title">${book.titre}</h4>
                <span class="badge bg-secondary">#${book.id}</span>
            </div>
            <p class="book-author"><i class="fas fa-user-pen"></i> ${book.auteur}</p>
            <div class="book-meta">
                <span><i class="fas fa-calendar"></i> ${book.annee || 'N/A'}</span>
                <span><i class="fas fa-tag"></i> ${book.genre}</span>
                <span><i class="fas fa-file"></i> ${book.pages || '?'} p.</span>
            </div>
            <p class="book-resume">${book.resume ? book.resume.substring(0, 100) + '...' : 'Aucun résumé'}</p>
            <div class="book-actions">
                <button class="btn btn-info btn-sm view-book" data-id="${book.id}">
                    <i class="fas fa-eye"></i> Voir
                </button>
                <button class="btn btn-warning btn-sm edit-book" data-id="${book.id}">
                    <i class="fas fa-edit"></i> Modifier
                </button>
                <button class="btn btn-danger btn-sm delete-book" data-id="${book.id}">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </div>
        </div>
    `;
    
    col.querySelector('.view-book').addEventListener('click', () => viewBookDetails(book.id));
    col.querySelector('.edit-book').addEventListener('click', () => editBook(book.id));
    col.querySelector('.delete-book').addEventListener('click', () => showDeleteConfirmation(book.id, 'book'));
    
    return col;
}

function renderAuthors() {
    const container = document.getElementById('authors-container');
    container.innerHTML = '';
    
    authors.forEach(author => {
        const authorCard = createAuthorCard(author);
        container.appendChild(authorCard);
    });
}

function createAuthorCard(author) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    const bookCount = books.filter(book => book.auteur === author.nom).length;
    
    col.innerHTML = `
        <div class="book-card">
            <div class="book-header">
                <h4 class="book-title">${author.nom}</h4>
                <span class="badge bg-info">${bookCount} livre${bookCount > 1 ? 's' : ''}</span>
            </div>
            <p><i class="fas fa-globe"></i> ${author.pays || 'Non spécifié'}</p>
            <p class="book-resume">${author.bio ? author.bio.substring(0, 120) + '...' : 'Aucune biographie'}</p>
            <div class="book-actions">
                <button class="btn btn-info btn-sm view-author" data-id="${author.id}">
                    <i class="fas fa-eye"></i> Voir
                </button>
                <button class="btn btn-danger btn-sm delete-author" data-id="${author.id}">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </div>
        </div>
    `;
    
    col.querySelector('.view-author').addEventListener('click', () => viewAuthorDetails(author.id));
    col.querySelector('.delete-author').addEventListener('click', () => showDeleteConfirmation(author.id, 'author'));
    
    return col;
}

function viewAuthorDetails(id) {
    const author = authors.find(a => a.id == id);
    if (!author) return;
    
    const authorBooks = books.filter(book => book.auteur === author.nom);
    
    document.getElementById('modalAuthorName').textContent = author.nom;
    document.getElementById('modalAuthorCountry').textContent = author.pays || 'Non spécifié';
    document.getElementById('modalAuthorBio').textContent = author.bio || 'Aucune biographie disponible.';
    document.getElementById('modalAuthorBooksCount').textContent = authorBooks.length;
    
    const booksList = document.getElementById('modalAuthorBooksList');
    booksList.innerHTML = '';
    
    authorBooks.forEach(book => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <strong>${book.titre}</strong> (${book.annee || 'Année inconnue'})
            <br>
            <small>${book.genre} - ${book.pages || '?'} pages</small>
        `;
        booksList.appendChild(li);
    });
    
    const modal = new bootstrap.Modal(document.getElementById('authorDetailModal'));
    modal.show();
}

function handleBookSubmit(e) {
    e.preventDefault();
    
    const id = document.getElementById('edit-id').value;
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const annee = document.getElementById('annee').value;
    const genre = document.getElementById('genre').value;
    const pages = document.getElementById('pages').value;
    const isbn = document.getElementById('isbn').value;
    const resume = document.getElementById('resume').value;
    
    if (id) {
        const index = books.findIndex(b => b.id == id);
        if (index !== -1) {
            books[index] = {
                ...books[index],
                titre,
                auteur,
                annee: annee ? parseInt(annee) : null,
                genre,
                pages: pages ? parseInt(pages) : null,
                isbn,
                resume
            };
        }
    } else {
        const newBook = {
            id: currentBookId++,
            titre,
            auteur,
            annee: annee ? parseInt(annee) : null,
            genre,
            pages: pages ? parseInt(pages) : null,
            isbn,
            resume,
            dateAjout: new Date().toISOString()
        };
        books.push(newBook);
    }
    
    saveBooks();
    renderBooks();
    updateDashboard();
    toggleBookForm();
    
    if (!authors.some(a => a.nom === auteur)) {
        const newAuthor = {
            id: currentAuthorId++,
            nom: auteur,
            pays: '',
            bio: ''
        };
        authors.push(newAuthor);
        saveAuthors();
        renderAuthors();
    }
    
    showNotification(id ? `Livre "${titre}" modifié avec succès !` : `Livre "${titre}" ajouté avec succès !`, 'success');
}

function editBook(id) {
    const book = books.find(b => b.id == id);
    if (!book) return;
    
    // Remplir le formulaire avec les données du livre
    document.getElementById('edit-id').value = book.id;
    document.getElementById('titre').value = book.titre;
    document.getElementById('auteur').value = book.auteur;
    document.getElementById('annee').value = book.annee || '';
    document.getElementById('genre').value = book.genre;
    document.getElementById('pages').value = book.pages || '';
    document.getElementById('isbn').value = book.isbn || '';
    document.getElementById('resume').value = book.resume || '';
    
    // Afficher le formulaire s'il est caché
    const form = document.getElementById('livre-form');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        document.getElementById('toggle-form-btn').innerHTML = '<i class="fas fa-times"></i> Annuler la modification';
    }
    
    // Afficher la section des livres si ce n'est pas déjà fait
    showSection('livres');
    
    // Scroller vers le formulaire
    form.scrollIntoView({ behavior: 'smooth' });
}

function viewBookDetails(id) {
    const book = books.find(b => b.id == id);
    if (!book) return;
    
    document.getElementById('modalBookTitle').textContent = book.titre;
    document.getElementById('modalBookAuthor').textContent = book.auteur;
    document.getElementById('modalBookYear').textContent = book.annee || 'Non spécifiée';
    document.getElementById('modalBookGenre').textContent = book.genre;
    document.getElementById('modalBookPages').textContent = book.pages ? `${book.pages} pages` : 'Non spécifié';
    document.getElementById('modalBookISBN').textContent = book.isbn || 'Non spécifié';
    document.getElementById('modalBookResume').textContent = book.resume || 'Aucun résumé disponible.';
    
    const modal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
    modal.show();
}

function handleAuthorSubmit(e) {
    e.preventDefault();
    
    const nom = document.getElementById('auteur-nom').value;
    const pays = document.getElementById('auteur-pays').value;
    const bio = document.getElementById('auteur-bio').value;
    
    const newAuthor = {
        id: currentAuthorId++,
        nom,
        pays,
        bio
    };
    
    authors.push(newAuthor);
    saveAuthors();
    renderAuthors();
    toggleAuthorForm();
    updateDashboard();
    
    showNotification(`Auteur "${nom}" ajouté avec succès !`, 'success');
}

function showDeleteConfirmation(id, type) {
    deleteId = id;
    deleteType = type;
    
    let message = '';
    if (type === 'book') {
        const book = books.find(b => b.id == id);
        message = `Êtes-vous sûr de vouloir supprimer le livre "${book?.titre}" ? Cette action est irréversible.`;
    } else {
        const author = authors.find(a => a.id == id);
        message = `Êtes-vous sûr de vouloir supprimer l'auteur "${author?.nom}" ? Tous ses livres seront également supprimés.`;
    }
    
    document.getElementById('confirmMessage').textContent = message;
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
}

function confirmDelete() {
    let itemName = '';
    
    if (deleteType === 'book') {
        const book = books.find(b => b.id == deleteId);
        itemName = book?.titre || 'le livre';
        const index = books.findIndex(b => b.id == deleteId);
        if (index !== -1) {
            books.splice(index, 1);
            saveBooks();
            renderBooks();
        }
    } else {
        const author = authors.find(a => a.id == deleteId);
        itemName = author?.nom || "l'auteur";
        if (author) {
            books = books.filter(book => book.auteur !== author.nom);
            authors = authors.filter(a => a.id != deleteId);
            
            saveBooks();
            saveAuthors();
            renderBooks();
            renderAuthors();
        }
    }
    
    updateDashboard();
    const modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    modal.hide();
    deleteId = null;
    deleteType = null;
    
    showNotification(`${deleteType === 'book' ? 'Livre' : 'Auteur'} "${itemName}" supprimé avec succès !`, 'success');
}

function performSearch() {
    renderBooks();
}

function updateDashboard() {
    document.getElementById('total-livres').textContent = books.length;
    
    const uniqueAuthors = [...new Set(books.map(book => book.auteur))];
    document.getElementById('total-auteurs').textContent = uniqueAuthors.length;
    
    const genres = [...new Set(books.map(book => book.genre))];
    document.getElementById('genres-count').textContent = genres.length;
 
    const booksWithPages = books.filter(book => book.pages);
    const avgPages = booksWithPages.length > 0 
        ? Math.round(booksWithPages.reduce((sum, book) => sum + book.pages, 0) / booksWithPages.length)
        : 0;
    document.getElementById('moyenne-pages').textContent = avgPages;
    
    updateStatistics();
    updateRecentBooks();
    updateCharts();
}

function updateStatistics() {
    const totalPages = books.reduce((sum, book) => sum + (book.pages || 0), 0);
    document.getElementById('total-pages').textContent = totalPages.toLocaleString();
    
    const years = books.map(book => book.annee).filter(year => year);
    if (years.length > 0) {
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        document.getElementById('periode-couverte').textContent = `${minYear} - ${maxYear}`;
    }
    
    document.getElementById('langues-count').textContent = 'Français, Anglais';
}

function updateRecentBooks() {
    const container = document.getElementById('recent-books-list');
    container.innerHTML = '';
    
    const recentBooks = [...books]
        .sort((a, b) => (b.id || 0) - (a.id || 0))
        .slice(0, 4);
    
    recentBooks.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col-md-3 col-6';
        col.innerHTML = `
            <div class="recent-book-card">
                <h6>${book.titre.substring(0, 30)}${book.titre.length > 30 ? '...' : ''}</h6>
                <p class="small">${book.auteur}</p>
                <span class="badge bg-secondary">${book.genre}</span>
            </div>
        `;
        container.appendChild(col);
    });
}

function initializeCharts() {
    const genreCtx = document.getElementById('genreChart').getContext('2d');
    const auteurCtx = document.getElementById('auteurChart').getContext('2d');
    
    genreChart = new Chart(genreCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Nombre de livres',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
    
    auteurChart = new Chart(auteurCtx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Livres par auteur',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
    
    updateCharts();
}

function updateCharts() {
    const genreCount = {};
    books.forEach(book => {
        genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
    });
    
    genreChart.data.labels = Object.keys(genreCount);
    genreChart.data.datasets[0].data = Object.values(genreCount);
    genreChart.update();
    
    const authorCount = {};
    books.forEach(book => {
        authorCount[book.auteur] = (authorCount[book.auteur] || 0) + 1;
    });
    
    const sortedAuthors = Object.entries(authorCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    auteurChart.data.labels = sortedAuthors.map(a => a[0]);
    auteurChart.data.datasets[0].data = sortedAuthors.map(a => a[1]);
    auteurChart.update();
}

async function searchOpenLibrary() {
    const query = document.getElementById('api-search').value.trim();
    if (!query) {
        alert('Veuillez entrer un terme de recherche');
        return;
    }
    
    const resultsContainer = document.getElementById('api-books-list');
    resultsContainer.innerHTML = '<div class="col-12 text-center"><div class="spinner-border text-primary" role="status"></div><p>Recherche en cours...</p></div>';
    
    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=5`);
        const data = await response.json();
        
        apiSearchCount++;
        lastSearchTime = new Date().toISOString();
        document.getElementById('api-books-count').textContent = apiSearchCount;
        document.getElementById('last-search').textContent = formatDate(lastSearchTime);
        
        localStorage.setItem('bibliotheca_api_count', apiSearchCount.toString());
        localStorage.setItem('bibliotheca_last_search', lastSearchTime);
        
        displayApiResults(data.docs || []);
    } catch (error) {
        console.error('Erreur API:', error);
        resultsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    <i class="fas fa-exclamation-triangle"></i> Erreur lors de la recherche. Veuillez réessayer.
                </div>
            </div>
        `;
    }
}

function displayApiResults(books) {
    const container = document.getElementById('api-books-list');
    container.innerHTML = '';
    
    if (books.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-3">
                <i class="fas fa-search fa-2x text-muted mb-2"></i>
                <p>Aucun livre trouvé pour cette recherche</p>
            </div>
        `;
        return;
    }
    
    books.forEach((book, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        const title = book.title || 'Titre inconnu';
        const author = book.author_name ? book.author_name[0] : 'Auteur inconnu';
        const year = book.first_publish_year || 'Année inconnue';
        const isbn = book.isbn ? book.isbn[0] : null;
        
        col.innerHTML = `
            <div class="api-book-card">
                <h6>${title.substring(0, 50)}${title.length > 50 ? '...' : ''}</h6>
                <p class="small"><strong>Auteur:</strong> ${author}</p>
                <p class="small"><strong>Année:</strong> ${year}</p>
                ${isbn ? `<p class="small"><strong>ISBN:</strong> ${isbn}</p>` : ''}
                <button class="btn btn-sm btn-success add-from-api" data-index="${index}">
                    <i class="fas fa-plus"></i> Ajouter à ma bibliothèque
                </button>
            </div>
        `;
        
        col.querySelector('.add-from-api').addEventListener('click', () => addBookFromApi(book));
        container.appendChild(col);
    });
}

function addBookFromApi(apiBook) {
    const title = apiBook.title || 'Livre sans titre';
    const author = apiBook.author_name ? apiBook.author_name[0] : 'Auteur inconnu';
    const year = apiBook.first_publish_year || null;
    const isbn = apiBook.isbn ? apiBook.isbn[0] : '';
    
    const existingBook = books.find(book => 
        book.titre === title || 
        (isbn && book.isbn === isbn)
    );
    
    if (existingBook) {
        alert('Ce livre est déjà dans votre bibliothèque !');
        return;
    }
    
    const newBook = {
        id: currentBookId++,
        titre: title,
        auteur: author,
        annee: year,
        genre: 'Roman',
        pages: apiBook.number_of_pages_median || 300,
        isbn: isbn,
        resume: 'Livre ajouté depuis OpenLibrary',
        dateAjout: new Date().toISOString()
    };
    
    books.push(newBook);
    saveBooks();
    renderBooks();
    updateDashboard();
    
    if (!authors.some(a => a.nom === author)) {
        const newAuthor = {
            id: currentAuthorId++,
            nom: author,
            pays: '',
            bio: `Auteur de "${title}"`
        };
        authors.push(newAuthor);
        saveAuthors();
        renderAuthors();
    }
    
    showNotification(`"${title}" a été ajouté à votre bibliothèque !`, 'success');
}

async function addRandomBook() {
    const randomSubjects = ['fiction', 'science', 'history', 'philosophy', 'poetry'];
    const randomSubject = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];
    
    document.getElementById('api-search').value = randomSubject;
    await searchOpenLibrary();
    
    setTimeout(() => {
        const firstAddButton = document.querySelector('.add-from-api');
        if (firstAddButton) {
            firstAddButton.click();
        }
    }, 1000);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
    `;
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

window.bibliotheca = {
    getBooks: () => books,
    getAuthors: () => authors,
    resetData: () => {
        if (confirm('Voulez-vous vraiment réinitialiser toutes les données ?')) {
            localStorage.clear();
            books = [...initialBooks];
            authors = [...initialAuthors];
            currentBookId = 11;
            currentAuthorId = 6;
            saveBooks();
            saveAuthors();
            renderBooks();
            renderAuthors();
            updateDashboard();
            showNotification('Données réinitialisées avec succès !', 'success');
        }
    },
    addTestBook: () => {
        const testBooks = [
            {
                titre: "Le Monde d'hier",
                auteur: "Stefan Zweig",
                annee: 1942,
                genre: "Autobiographie",
                pages: 480,
                resume: "Souvenirs d'un Européen sur l'entre-deux-guerres."
            },
            {
                titre: "Bel-Ami",
                auteur: "Guy de Maupassant",
                annee: 1885,
                genre: "Roman",
                pages: 400,
                resume: "L'ascension sociale d'un jeune homme ambitieux dans le Paris du XIXe siècle."
            }
        ];
        
        testBooks.forEach(book => {
            const newBook = {
                id: currentBookId++,
                ...book,
                dateAjout: new Date().toISOString()
            };
            books.push(newBook);
        });
        
        saveBooks();
        renderBooks();
        updateDashboard();
        showNotification('Livres de test ajoutés !', 'info');
    }
};

setTimeout(() => {
    if (!localStorage.getItem('bibliotheca_welcome_shown')) {
        showNotification('Bienvenue dans Bibliotheca ! Votre dashboard de bibliothèque personnel.', 'info');
        localStorage.setItem('bibliotheca_welcome_shown', 'true');
    }
}, 1000);

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    if (e.key === 'Escape') {
        const form = document.getElementById('livre-form');
        if (!form.classList.contains('hidden')) {
            toggleBookForm();
        }
    }
});

function generateAdvancedStats() {
    const stats = {
        totalBooks: books.length,
        totalAuthors: [...new Set(books.map(b => b.auteur))].length,
        totalPages: books.reduce((sum, book) => sum + (book.pages || 0), 0),
        averagePages: Math.round(books.filter(b => b.pages).reduce((sum, book) => sum + book.pages, 0) / books.filter(b => b.pages).length),
        oldestBook: books.reduce((oldest, book) => (book.annee && book.annee < oldest.annee) ? book : oldest, { annee: 9999 }),
        newestBook: books.reduce((newest, book) => (book.annee && book.annee > newest.annee) ? book : newest, { annee: 0 }),
        mostCommonGenre: Object.entries(books.reduce((acc, book) => {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
            return acc;
        }, {})).sort((a, b) => b[1] - a[1])[0],
        mostProlificAuthor: Object.entries(books.reduce((acc, book) => {
            acc[book.auteur] = (acc[book.auteur] || 0) + 1;
            return acc;
        }, {})).sort((a, b) => b[1] - a[1])[0]
    };
    
    return stats;
}

function exportData() {
    const data = {
        books: books,
        authors: authors,
        metadata: {
            exportDate: new Date().toISOString(),
            totalBooks: books.length,
            totalAuthors: authors.length,
            apiSearchCount: apiSearchCount
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bibliotheca-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Données exportées avec succès !', 'success');
}
