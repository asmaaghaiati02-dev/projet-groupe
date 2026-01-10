// ============================================
// INITIALISATION ET DONNÉES
// ============================================

// Les 50 livres de qualité pour un jeune de 20 ans
const initialBooks = [
    {
        id: 1,
        titre: "1984",
        auteur: "George Orwell",
        annee: 1949,
        genre: "Dystopie",
        pages: 328,
        isbn: "9782070368224",
        resume: "Un classique absolu sur la surveillance, la propagande et la résistance.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070368224-M.jpg"
    },
    {
        id: 2,
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        annee: 1943,
        genre: "Conte philosophique",
        pages: 96,
        isbn: "9782070612758",
        resume: "Une fable universelle sur l'amitié, la perte et le sens de la vie.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070612758-M.jpg"
    },
    {
        id: 3,
        titre: "L'Étranger",
        auteur: "Albert Camus",
        annee: 1942,
        genre: "Roman philosophique",
        pages: 185,
        isbn: "9782070360020",
        resume: "Le récit de Meursault, qui questionne l'absurdité de l'existence.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070360020-M.jpg"
    },
    {
        id: 4,
        titre: "Fondation",
        auteur: "Isaac Asimov",
        annee: 1951,
        genre: "Science-Fiction",
        pages: 255,
        isbn: "9782070360532",
        resume: "Une saga spatiale sur la chute d'un empire galactique et la science de l'histoire.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070360532-M.jpg"
    },
    {
        id: 5,
        titre: "Le Seigneur des Anneaux",
        auteur: "J.R.R. Tolkien",
        annee: 1954,
        genre: "Fantasy",
        pages: 1216,
        isbn: "9782266280011",
        resume: "L'épopée mythique de la Terre du Milieu, entre amitié, guerre et magie.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266280011-M.jpg"
    },
    {
        id: 6,
        titre: "Dune",
        auteur: "Frank Herbert",
        annee: 1965,
        genre: "Science-Fiction",
        pages: 544,
        isbn: "9782290114789",
        resume: "Sur la planète Arrakis, le contrôle de l'épice mène au pouvoir absolu.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782290114789-M.jpg"
    },
    {
        id: 7,
        titre: "Orgueil et Préjugés",
        auteur: "Jane Austen",
        annee: 1813,
        genre: "Roman",
        pages: 432,
        isbn: "9782070412422",
        resume: "Une satire fine des mœurs et du mariage dans l'Angleterre du XIXe siècle.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070412422-M.jpg"
    },
    {
        id: 8,
        titre: "Le Nom de la Rose",
        auteur: "Umberto Eco",
        annee: 1980,
        genre: "Roman historique",
        pages: 615,
        isbn: "9782253138731",
        resume: "Une enquête dans une abbaye médiévale, entre théologie et meurtres.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253138731-M.jpg"
    },
    {
        id: 9,
        titre: "Les Misérables",
        auteur: "Victor Hugo",
        annee: 1862,
        genre: "Roman social",
        pages: 1488,
        isbn: "9782070411432",
        resume: "La lutte pour la rédemption et la justice dans la France du XIXe siècle.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070411432-M.jpg"
    },
    {
        id: 10,
        titre: "L'Alchimiste",
        auteur: "Paulo Coelho",
        annee: 1988,
        genre: "Conte initiatique",
        pages: 208,
        isbn: "9782266222578",
        resume: "Le voyage d'un berger andalou à la recherche de son trésor personnel.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266222578-M.jpg"
    },
    {
        id: 11,
        titre: "Voyage au bout de la nuit",
        auteur: "Louis-Ferdinand Céline",
        annee: 1932,
        genre: "Roman",
        pages: 625,
        isbn: "9782070360280",
        resume: "Un chef-d'œuvre de style et de pessimisme sur la condition humaine.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070360280-M.jpg"
    },
    {
        id: 12,
        titre: "Gatsby le Magnifique",
        auteur: "F. Scott Fitzgerald",
        annee: 1925,
        genre: "Roman tragique",
        pages: 218,
        isbn: "9782070368224",
        resume: "Le rêve américain et ses illusions dans les années folles.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070368224-M.jpg"
    },
    {
        id: 13,
        titre: "Les Fleurs du Mal",
        auteur: "Charles Baudelaire",
        annee: 1857,
        genre: "Poésie",
        pages: 300,
        isbn: "9782070368088",
        resume: "Un recueil fondateur de la modernité poétique.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070368088-M.jpg"
    },
    {
        id: 14,
        titre: "Le Procès",
        auteur: "Franz Kafka",
        annee: 1925,
        genre: "Roman absurde",
        pages: 256,
        isbn: "9782070363472",
        resume: "L'angoisse d'un homme pris dans les mailles d'une justice incompréhensible.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070363472-M.jpg"
    },
    {
        id: 15,
        titre: "Cent ans de solitude",
        auteur: "Gabriel García Márquez",
        annee: 1967,
        genre: "Réalisme magique",
        pages: 448,
        isbn: "9782020238111",
        resume: "L'histoire de la famille Buendía, entre magie, amour et folie.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782020238111-M.jpg"
    },
    {
        id: 16,
        titre: "La Horde du Contrevent",
        auteur: "Alain Damasio",
        annee: 2004,
        genre: "Science-Fiction",
        pages: 688,
        isbn: "9782070495685",
        resume: "Une quête épique contre les vents dans un monde hostile.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070495685-M.jpg"
    },
    {
        id: 17,
        titre: "Sapiens : Une brève histoire de l'humanité",
        auteur: "Yuval Noah Harari",
        annee: 2011,
        genre: "Essai",
        pages: 512,
        isbn: "9782226257017",
        resume: "Comment Homo Sapiens a dominé la planète.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782226257017-M.jpg"
    },
    {
        id: 18,
        titre: "Le Mythe de Sisyphe",
        auteur: "Albert Camus",
        annee: 1942,
        genre: "Essai philosophique",
        pages: 198,
        isbn: "9782070322882",
        resume: "Une réflexion sur l'absurde et la révolte face à une existence sans sens apparent.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070322882-M.jpg"
    },
    {
        id: 19,
        titre: "Harry Potter à l'école des sorciers",
        auteur: "J.K. Rowling",
        annee: 1997,
        genre: "Fantasy",
        pages: 320,
        isbn: "9782070518425",
        resume: "Le début d'une saga mythique sur la magie, l'amitié et le destin.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070518425-M.jpg"
    },
    {
        id: 20,
        titre: "Les Thanatonautes",
        auteur: "Bernard Werber",
        annee: 1994,
        genre: "Science-Fiction",
        pages: 410,
        isbn: "9782253063637",
        resume: "Une exploration scientifique de l'au-delà.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253063637-M.jpg"
    },
    {
        id: 21,
        titre: "Le Parfum",
        auteur: "Patrick Süskind",
        annee: 1985,
        genre: "Roman historique",
        pages: 272,
        isbn: "9782266030489",
        resume: "L'histoire de Grenouille, un tueur en série obsédé par les odeurs.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266030489-M.jpg"
    },
    {
        id: 22,
        titre: "La Peste",
        auteur: "Albert Camus",
        annee: 1947,
        genre: "Roman allégorique",
        pages: 347,
        isbn: "9782070360426",
        resume: "Une ville frappée par une épidémie, métaphore de la résistance face au mal.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070360426-M.jpg"
    },
    {
        id: 23,
        titre: "Le Vieil Homme et la Mer",
        auteur: "Ernest Hemingway",
        annee: 1952,
        genre: "Roman court",
        pages: 127,
        isbn: "9782070361232",
        resume: "La lutte d'un pêcheur cubain contre un énorme marlin.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070361232-M.jpg"
    },
    {
        id: 24,
        titre: "Les Hauts de Hurlevent",
        auteur: "Emily Brontë",
        annee: 1847,
        genre: "Roman gothique",
        pages: 416,
        isbn: "9782253004784",
        resume: "Une histoire d'amour et de vengeance dans les landes anglaises.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253004784-M.jpg"
    },
    {
        id: 25,
        titre: "Fahrenheit 451",
        auteur: "Ray Bradbury",
        annee: 1953,
        genre: "Dystopie",
        pages: 256,
        isbn: "9782070364172",
        resume: "Dans un futur où les livres sont brûlés, un pompier se met à lire.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070364172-M.jpg"
    },
    {
        id: 26,
        titre: "Le Comte de Monte-Cristo",
        auteur: "Alexandre Dumas",
        annee: 1844,
        genre: "Roman d'aventures",
        pages: 1312,
        isbn: "9782253006313",
        resume: "La vengeance méthodique d'un homme injustement emprisonné.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253006313-M.jpg"
    },
    {
        id: 27,
        titre: "La Nuit des temps",
        auteur: "René Barjavel",
        annee: 1968,
        genre: "Science-Fiction",
        pages: 380,
        isbn: "9782266017060",
        resume: "Une civilisation antique découverte sous les glaces de l'Antarctique.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266017060-M.jpg"
    },
    {
        id: 28,
        titre: "Le Silence des agneaux",
        auteur: "Thomas Harris",
        annee: 1988,
        genre: "Thriller",
        pages: 448,
        isbn: "9782266037525",
        resume: "La traque d'un tueur en série avec l'aide d'un cannibale génial.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266037525-M.jpg"
    },
    {
        id: 29,
        titre: "Les Trois Mousquetaires",
        auteur: "Alexandre Dumas",
        annee: 1844,
        genre: "Roman de cape et d'épée",
        pages: 704,
        isbn: "9782253006214",
        resume: "Aventures, amitié et intrigue à la cour de Louis XIII.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253006214-M.jpg"
    },
    {
        id: 30,
        titre: "Le Château de ma mère",
        auteur: "Marcel Pagnol",
        annee: 1957,
        genre: "Autobiographie",
        pages: 256,
        isbn: "9782253001479",
        resume: "Une évocation tendre et drôle de la Provence.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253001479-M.jpg"
    },
    {
        id: 31,
        titre: "La Planète des singes",
        auteur: "Pierre Boulle",
        annee: 1963,
        genre: "Science-Fiction",
        pages: 272,
        isbn: "9782266020266",
        resume: "Une inversion des rôles entre humains et primates.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266020266-M.jpg"
    },
    {
        id: 32,
        titre: "L'Art de la guerre",
        auteur: "Sun Tzu",
        annee: -500,
        genre: "Stratégie",
        pages: 128,
        isbn: "9782251445160",
        resume: "Un traité intemporel sur la tactique et la psychologie du conflit.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782251445160-M.jpg"
    },
    {
        id: 33,
        titre: "Le Rouge et le Noir",
        auteur: "Stendhal",
        annee: 1830,
        genre: "Roman psychologique",
        pages: 576,
        isbn: "9782253005156",
        resume: "L'ascension sociale et amoureuse de Julien Sorel.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253005156-M.jpg"
    },
    {
        id: 34,
        titre: "Au revoir là-haut",
        auteur: "Pierre Lemaitre",
        annee: 2013,
        genre: "Roman historique",
        pages: 576,
        isbn: "9782253182031",
        resume: "La France après la Grande Guerre, entre trahison et rédemption.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253182031-M.jpg"
    },
    {
        id: 35,
        titre: "Les Raisins de la colère",
        auteur: "John Steinbeck",
        annee: 1939,
        genre: "Roman social",
        pages: 624,
        isbn: "9782070368220",
        resume: "La Grande Dépression à travers le périple d'une famille d'Okies.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070368220-M.jpg"
    },
    {
        id: 36,
        titre: "Le Loup des steppes",
        auteur: "Hermann Hesse",
        annee: 1927,
        genre: "Roman initiatique",
        pages: 288,
        isbn: "9782253006337",
        resume: "La quête spirituelle d'un homme déchiré entre deux natures.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253006337-M.jpg"
    },
    {
        id: 37,
        titre: "Les Désorientés",
        auteur: "Amin Maalouf",
        annee: 2012,
        genre: "Roman contemporain",
        pages: 480,
        isbn: "9782246850694",
        resume: "Des amis se retrouvent après des années, entre mémoire et identité.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782246850694-M.jpg"
    },
    {
        id: 38,
        titre: "La Guerre des mondes",
        auteur: "H.G. Wells",
        annee: 1898,
        genre: "Science-Fiction",
        pages: 192,
        isbn: "9782253007341",
        resume: "L'invasion de la Terre par les Martiens.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253007341-M.jpg"
    },
    {
        id: 39,
        titre: "Vernon Subutex",
        auteur: "Virginie Despentes",
        annee: 2015,
        genre: "Roman social",
        pages: 432,
        isbn: "9782251446754",
        resume: "Le portrait d'une société française à travers le destin d'un ancien disquaire.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782251446754-M.jpg"
    },
    {
        id: 40,
        titre: "L'Insoutenable Légèreté de l'être",
        auteur: "Milan Kundera",
        annee: 1984,
        genre: "Roman philosophique",
        pages: 384,
        isbn: "9782070377192",
        resume: "Amour, hasard et destin dans la Tchécoslovaquie communiste.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070377192-M.jpg"
    },
    {
        id: 41,
        titre: "La Trilogie new-yorkaise",
        auteur: "Paul Auster",
        annee: 1987,
        genre: "Roman policier",
        pages: 320,
        isbn: "9782020099521",
        resume: "Trois histoires qui interrogent l'identité et le hasard.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782020099521-M.jpg"
    },
    {
        id: 42,
        titre: "Le Portrait de Dorian Gray",
        auteur: "Oscar Wilde",
        annee: 1890,
        genre: "Roman fantastique",
        pages: 288,
        isbn: "9782253006535",
        resume: "Un pacte diabolique pour conserver sa jeunesse.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253006535-M.jpg"
    },
    {
        id: 43,
        titre: "La Servante écarlate",
        auteur: "Margaret Atwood",
        annee: 1985,
        genre: "Dystopie",
        pages: 320,
        isbn: "9782020258349",
        resume: "Dans une théocratie, les femmes fertiles sont réduites à l'esclavage.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782020258349-M.jpg"
    },
    {
        id: 44,
        titre: "Les Mémoires d'Hadrien",
        auteur: "Marguerite Yourcenar",
        annee: 1951,
        genre: "Roman historique",
        pages: 384,
        isbn: "9782070369210",
        resume: "L'empereur romain raconte sa vie et sa philosophie.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070369210-M.jpg"
    },
    {
        id: 45,
        titre: "Les Fourmis",
        auteur: "Bernard Werber",
        annee: 1991,
        genre: "Science-Fiction",
        pages: 352,
        isbn: "9782253061223",
        resume: "Une civilisation de fourmis parallèle à la nôtre.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253061223-M.jpg"
    },
    {
        id: 46,
        titre: "L'Île du jour d'avant",
        auteur: "Umberto Eco",
        annee: 1994,
        genre: "Roman historique",
        pages: 512,
        isbn: "9782253144421",
        resume: "Un naufragé au XVIIe siècle, entre science, amour et mystère.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782253144421-M.jpg"
    },
    {
        id: 47,
        titre: "Les Enfants de minuit",
        auteur: "Salman Rushdie",
        annee: 1981,
        genre: "Réalisme magique",
        pages: 536,
        isbn: "9782264025136",
        resume: "L'histoire de l'Inde à travers les enfants nés à l'heure de l'indépendance.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782264025136-M.jpg"
    },
    {
        id: 48,
        titre: "La Condition humaine",
        auteur: "André Malraux",
        annee: 1933,
        genre: "Roman engagé",
        pages: 384,
        isbn: "9782070368046",
        resume: "La révolte communiste à Shanghai en 1927.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070368046-M.jpg"
    },
    {
        id: 49,
        titre: "Le Maître et Marguerite",
        auteur: "Mikhaïl Boulgakov",
        annee: 1967,
        genre: "Satire fantastique",
        pages: 448,
        isbn: "9782070365649",
        resume: "Le diable visite Moscou sous Staline.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782070365649-M.jpg"
    },
    {
        id: 50,
        titre: "La Cité des ténèbres",
        auteur: "Cassandra Clare",
        annee: 2007,
        genre: "Fantasy",
        pages: 496,
        isbn: "9782266189194",
        resume: "Un monde de chasseurs de démons dans le New York contemporain.",
        imageUrl: "https://covers.openlibrary.org/b/isbn/9782266189194-M.jpg"
    }
];

// Données initiales pour les auteurs (dérivées des livres)
const initialAuthors = [
    { id: 1, nom: "George Orwell", pays: "Royaume-Uni", bio: "Écrivain anglais, auteur de 1984 et La Ferme des animaux." },
    { id: 2, nom: "Antoine de Saint-Exupéry", pays: "France", bio: "Écrivain et aviateur français, auteur du Petit Prince." },
    { id: 3, nom: "Albert Camus", pays: "France", bio: "Écrivain et philosophe français, prix Nobel de littérature 1957." },
    { id: 4, nom: "Isaac Asimov", pays: "États-Unis", bio: "Écrivain américain, célèbre pour ses œuvres de science-fiction." },
    { id: 5, nom: "J.R.R. Tolkien", pays: "Royaume-Uni", bio: "Écrivain et philologue anglais, créateur de la Terre du Milieu." },
    { id: 6, nom: "Jane Austen", pays: "Royaume-Uni", bio: "Romancière anglaise, maîtresse du roman de mœurs." },
    { id: 7, nom: "Victor Hugo", pays: "France", bio: "Poète, dramaturge et romancier français, figure du romantisme." }
];

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================

let books = [];
let authors = [];
let currentBookId = 51; // Pour les nouveaux livres
let currentAuthorId = 8; // Pour les nouveaux auteurs
let deleteId = null;
let deleteType = null;
let apiSearchCount = 0;
let lastSearchTime = null;

// Chart instances
let genreChart = null;
let auteurChart = null;

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadInitialData();
    updateDashboard();
    renderBooks();
    renderAuthors();
});

function initializeApp() {
    // Charger depuis localStorage ou utiliser les données initiales
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
    
    // Initialiser les compteurs API
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
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
            
            // Mettre à jour la navigation active
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Sidebar toggle
    document.getElementById('sidebarCollapse').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
        document.querySelector('.main-content').classList.toggle('active');
    });
    
    // Formulaire livre
    document.getElementById('toggle-form-btn').addEventListener('click', toggleBookForm);
    document.getElementById('cancel-form-btn').addEventListener('click', toggleBookForm);
    document.getElementById('livre-form').addEventListener('submit', handleBookSubmit);
    
    // Formulaire auteur
    document.getElementById('toggle-auteur-form-btn').addEventListener('click', toggleAuthorForm);
    document.getElementById('cancel-auteur-form-btn').addEventListener('click', toggleAuthorForm);
    document.getElementById('auteur-form').addEventListener('submit', handleAuthorSubmit);
    
    // Recherche et tri
    document.getElementById('search-btn').addEventListener('click', performSearch);
    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    document.getElementById('sort-select').addEventListener('change', renderBooks);
    
    // API
    document.getElementById('api-search-btn').addEventListener('click', searchOpenLibrary);
    document.getElementById('api-search').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchOpenLibrary();
    });
    document.getElementById('add-random-book').addEventListener('click', addRandomBook);
    
    // Modal de confirmation
    document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);
}

// ============================================
// FONCTIONS DE GESTION DES DONNÉES
// ============================================

function saveBooks() {
    localStorage.setItem('bibliotheca_books', JSON.stringify(books));
}

function saveAuthors() {
    localStorage.setItem('bibliotheca_authors', JSON.stringify(authors));
}

function loadInitialData() {
    // Calculer les statistiques
    updateStatistics();
    
    // Initialiser les graphiques
    initializeCharts();
}

// ============================================
// FONCTIONS D'AFFICHAGE
// ============================================

function showSection(sectionId) {
    // Cacher toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Si c'est le dashboard, mettre à jour les données
        if (sectionId === 'dashboard') {
            updateDashboard();
        }
    }
}

function toggleBookForm() {
    const form = document.getElementById('livre-form');
    form.classList.toggle('hidden');
    
    // Réinitialiser le formulaire si on le cache
    if (!form.classList.contains('hidden')) {
        document.getElementById('edit-id').value = '';
        document.getElementById('livre-form').reset();
        document.getElementById('toggle-form-btn').textContent = 'Annuler l\'ajout';
    } else {
        document.getElementById('toggle-form-btn').innerHTML = '<i class="fas fa-plus"></i> Ajouter un Nouveau Livre';
    }
}

function toggleAuthorForm() {
    const form = document.getElementById('auteur-form');
    form.classList.toggle('hidden');
    
    if (!form.classList.contains('hidden')) {
        document.getElementById('toggle-auteur-form-btn').textContent = 'Annuler l\'ajout';
    } else {
        document.getElementById('toggle-auteur-form-btn').innerHTML = '<i class="fas fa-user-plus"></i> Ajouter un Auteur';
    }
}

// ============================================
// RENDU DES LIVRES AVEC IMAGES
// ============================================

function renderBooks() {
    const container = document.getElementById('books-container');
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sortBy = document.getElementById('sort-select').value;
    
    // Filtrer et trier
    let filteredBooks = [...books];
    
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.titre.toLowerCase().includes(searchTerm) ||
            book.auteur.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
    }
    
    // Trier
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
    
    // Rendu
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
    
    // Utilise l'image si disponible, sinon placeholder
    const hasImage = book.imageUrl && book.imageUrl.trim() !== '';
    
    col.innerHTML = `
        <div class="book-card" data-id="${book.id}">
            ${hasImage ? 
                `<div class="book-cover" style="background-image: url('${book.imageUrl}'); background-size: cover; background-position: center;"></div>` :
                `<div class="book-cover cover-generic">
                    <div class="cover-placeholder">
                        <i class="fas fa-book-open fa-3x"></i>
                        <p>${book.genre}</p>
                    </div>
                </div>`
            }
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
    
    // Ajouter les écouteurs d'événements
    col.querySelector('.view-book').addEventListener('click', () => viewBookDetails(book.id));
    col.querySelector('.edit-book').addEventListener('click', () => editBook(book.id));
    col.querySelector('.delete-book').addEventListener('click', () => showDeleteConfirmation(book.id, 'book'));
    
    return col;
}

// ============================================
// RENDU DES AUTEURS
// ============================================

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
    
    // Compter les livres de cet auteur
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
                <button class="btn btn-danger btn-sm delete-author" data-id="${author.id}">
                    <i class="fas fa-trash"></i> Supprimer
                </button>
            </div>
        </div>
    `;
    
    col.querySelector('.delete-author').addEventListener('click', () => showDeleteConfirmation(author.id, 'author'));
    
    return col;
}

// ============================================
// GESTION DES LIVRES (CRUD)
// ============================================

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
        // Modification
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
        // Nouveau livre
        const newBook = {
            id: currentBookId++,
            titre,
            auteur,
            annee: annee ? parseInt(annee) : null,
            genre,
            pages: pages ? parseInt(pages) : null,
            isbn,
            resume,
            dateAjout: new Date().toISOString(),
            imageUrl: isbn ? `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` : ''
        };
        books.push(newBook);
    }
    
    // Sauvegarder et mettre à jour
    saveBooks();
    renderBooks();
    updateDashboard();
    toggleBookForm();
    
    // Vérifier si l'auteur existe
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
}

function editBook(id) {
    const book = books.find(b => b.id == id);
    if (!book) return;
    
    // Remplir le formulaire
    document.getElementById('edit-id').value = book.id;
    document.getElementById('titre').value = book.titre;
    document.getElementById('auteur').value = book.auteur;
    document.getElementById('annee').value = book.annee || '';
    document.getElementById('genre').value = book.genre;
    document.getElementById('pages').value = book.pages || '';
    document.getElementById('isbn').value = book.isbn || '';
    document.getElementById('resume').value = book.resume || '';
    
    // Afficher le formulaire
    const form = document.getElementById('livre-form');
    if (form.classList.contains('hidden')) {
        toggleBookForm();
    }
    
    document.getElementById('toggle-form-btn').innerHTML = '<i class="fas fa-times"></i> Annuler la modification';
    
    // Scroller vers le formulaire
    form.scrollIntoView({ behavior: 'smooth' });
}

function viewBookDetails(id) {
    const book = books.find(b => b.id == id);
    if (!book) return;
    
    // Remplir le modal
    document.getElementById('modalBookTitle').textContent = book.titre;
    document.getElementById('modalBookAuthor').textContent = book.auteur;
    document.getElementById('modalBookYear').textContent = book.annee || 'Non spécifiée';
    document.getElementById('modalBookGenre').textContent = book.genre;
    document.getElementById('modalBookPages').textContent = book.pages ? `${book.pages} pages` : 'Non spécifié';
    document.getElementById('modalBookISBN').textContent = book.isbn || 'Non spécifié';
    document.getElementById('modalBookResume').textContent = book.resume || 'Aucun résumé disponible.';
    
    // Afficher l'image dans le modal si disponible
    const modalImage = document.getElementById('modalBookImage');
    if (modalImage && book.imageUrl) {
        modalImage.src = book.imageUrl;
        modalImage.style.display = 'block';
    } else if (modalImage) {
        modalImage.style.display = 'none';
    }
    
    // Afficher le modal
    const modal = new bootstrap.Modal(document.getElementById('bookDetailModal'));
    modal.show();
}

// ============================================
// GESTION DES AUTEURS (CRUD)
// ============================================

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
    
    // Mettre à jour le dashboard
    updateDashboard();
}

// ============================================
// SUPPRESSION
// ============================================

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
    if (deleteType === 'book') {
        // Supprimer le livre
        const index = books.findIndex(b => b.id == deleteId);
        if (index !== -1) {
            books.splice(index, 1);
            saveBooks();
            renderBooks();
        }
    } else {
        // Supprimer l'auteur et ses livres
        const author = authors.find(a => a.id == deleteId);
        if (author) {
            // Supprimer les livres de cet auteur
            books = books.filter(book => book.auteur !== author.nom);
            // Supprimer l'auteur
            authors = authors.filter(a => a.id != deleteId);
            
            saveBooks();
            saveAuthors();
            renderBooks();
            renderAuthors();
        }
    }
    
    // Mettre à jour le dashboard
    updateDashboard();
    
    // Fermer le modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
    modal.hide();
    
    // Réinitialiser
    deleteId = null;
    deleteType = null;
}

// ============================================
// RECHERCHE
// ============================================

function performSearch() {
    renderBooks();
}

// ============================================
// DASHBOARD ET STATISTIQUES
// ============================================

function updateDashboard() {
    // Mettre à jour les KPI
    document.getElementById('total-livres').textContent = books.length;
    
    const uniqueAuthors = [...new Set(books.map(book => book.auteur))];
    document.getElementById('total-auteurs').textContent = uniqueAuthors.length;
    
    const genres = [...new Set(books.map(book => book.genre))];
    document.getElementById('genres-count').textContent = genres.length;
    
    // Calculer la moyenne des pages
    const booksWithPages = books.filter(book => book.pages);
    const avgPages = booksWithPages.length > 0 
        ? Math.round(booksWithPages.reduce((sum, book) => sum + book.pages, 0) / booksWithPages.length)
        : 0;
    document.getElementById('moyenne-pages').textContent = avgPages;
    
    // Mettre à jour les autres statistiques
    updateStatistics();
    
    // Mettre à jour les livres récents
    updateRecentBooks();
    
    // Mettre à jour les graphiques
    updateCharts();
}

function updateStatistics() {
    // Pages totales
    const totalPages = books.reduce((sum, book) => sum + (book.pages || 0), 0);
    document.getElementById('total-pages').textContent = totalPages.toLocaleString();
    
    // Période couverte
    const years = books.map(book => book.annee).filter(year => year);
    if (years.length > 0) {
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        document.getElementById('periode-couverte').textContent = `${minYear} - ${maxYear}`;
    }
    
    // Langues (simplifié)
    document.getElementById('langues-count').textContent = 'Français, Anglais';
}

function updateRecentBooks() {
    const container = document.getElementById('recent-books-list');
    container.innerHTML = '';
    
    // Trier par date d'ajout ou par ID (les plus récents)
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

// ============================================
// GRAPHIQUES
// ============================================

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
    // Calculer les livres par genre
    const genreCount = {};
    books.forEach(book => {
        genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
    });
    
    // Mettre à jour le graphique des genres
    genreChart.data.labels = Object.keys(genreCount);
    genreChart.data.datasets[0].data = Object.values(genreCount);
    genreChart.update();
    
    // Calculer les livres par auteur (top 5)
    const authorCount = {};
    books.forEach(book => {
        authorCount[book.auteur] = (authorCount[book.auteur] || 0) + 1;
    });
    
    // Trier et prendre les top 5
    const sortedAuthors = Object.entries(authorCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    // Mettre à jour le graphique des auteurs
    auteurChart.data.labels = sortedAuthors.map(a => a[0]);
    auteurChart.data.datasets[0].data = sortedAuthors.map(a => a[1]);
    auteurChart.update();
}

// ============================================
// API OPENLIBRARY
// ============================================

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
        
        // Mettre à jour les métriques API
        apiSearchCount++;
        lastSearchTime = new Date().toISOString();
        document.getElementById('api-books-count').textContent = apiSearchCount;
        document.getElementById('last-search').textContent = formatDate(lastSearchTime);
        
        // Sauvegarder dans localStorage
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
    
    // Récupérer l'URL de l'image
    let imageUrl = '';
    if (apiBook.cover_i) {
        imageUrl = `https://covers.openlibrary.org/b/id/${apiBook.cover_i}-M.jpg`;
    } else if (isbn) {
        imageUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    }
    
    // Vérifier si le livre existe déjà
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
        dateAjout: new Date().toISOString(),
        imageUrl: imageUrl
    };
    
    books.push(newBook);
    saveBooks();
    renderBooks();
    updateDashboard();
    
    // Vérifier si l'auteur existe
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
    
    // Afficher un message de succès
    showNotification(`"${title}" a été ajouté à votre bibliothèque !`, 'success');
}

async function addRandomBook() {
    // Recherche aléatoire d'un livre populaire
    const randomSubjects = ['fiction', 'science', 'history', 'philosophy', 'poetry'];
    const randomSubject = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];
    
    document.getElementById('api-search').value = randomSubject;
    await searchOpenLibrary();
    
    // Ajouter automatiquement le premier résultat après un délai
    setTimeout(() => {
        const firstAddButton = document.querySelector('.add-from-api');
        if (firstAddButton) {
            firstAddButton.click();
        }
    }, 1000);
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

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
    // Créer une notification temporaire
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
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// ============================================
// FONCTIONS DE TEST ET DÉMONSTRATION
// ============================================

// Exporter certaines fonctions pour la console de développement
window.bibliotheca = {
    getBooks: () => books,
    getAuthors: () => authors,
    resetData: () => {
        if (confirm('Voulez-vous vraiment réinitialiser toutes les données ?')) {
            localStorage.clear();
            books = [...initialBooks];
            authors = [...initialAuthors];
            currentBookId = 51;
            currentAuthorId = 8;
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
                imageUrl: book.isbn ? `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg` : '',
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

// ============================================
// INITIALISATION FINALE
// ============================================

// Afficher un message de bienvenue
setTimeout(() => {
    if (!localStorage.getItem('bibliotheca_welcome_shown')) {
        showNotification('Bienvenue dans Bibliotheca ! Votre dashboard de bibliothèque personnel.', 'info');
        localStorage.setItem('bibliotheca_welcome_shown', 'true');
    }
}, 1000);

// Raccourcis clavier
document.addEventListener('keydown', (e) => {
    // Ctrl + / pour focus la recherche
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Échap pour annuler
    if (e.key === 'Escape') {
        const form = document.getElementById('livre-form');
        if (!form.classList.contains('hidden')) {
            toggleBookForm();
        }
    }
});

// ============================================
// FONCTIONS POUR LE RAPPORT
// ============================================

// Fonction pour générer des statistiques avancées
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

// Fonction pour exporter les données
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

// ============================================
// FIN DU FICHIER SCRIPT.JS
// ============================================

console.log(`
============================================
BIBLIOTHECA - DASHBOARD BIBLIOTHÈQUE
============================================
Version: 1.0.0
Auteur: Étudiant Développement Web
Année: 2025-2026
============================================
Fonctions disponibles dans la console:
- bibliotheca.getBooks(): Affiche tous les livres
- bibliotheca.getAuthors(): Affiche tous les auteurs
- bibliotheca.resetData(): Réinitialise les données
- bibliotheca.addTestBook(): Ajoute des livres de test
- generateAdvancedStats(): Statistiques avancées
- exportData(): Exporte les données en JSON
============================================
`);