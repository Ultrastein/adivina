/**
 * LÓGICA DE LA APLICACIÓN SPA "QUIÉN ES QUIÉN"
 */

// --- BASE DE DATOS INICIAL ---
// Categorías y personajes iniciales. Las imágenes son avatares aleatorios de Dicebear.
const DB = {
    "Clase": [
        // Empezamos con una clase vacía para invitar al profe a crear alumnos
    ],
    "Animales": [
        { name: "León", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Leon&backgroundColor=ffd5dc" },
        { name: "Elefante", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Elefante&backgroundColor=b6e3f4" },
        { name: "Tigre", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Tigre&backgroundColor=c0aede" },
        { name: "Panda", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Panda&backgroundColor=d1d4f9" },
        { name: "Canguro", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Canguro&backgroundColor=ffdfbf" },
        { name: "Delfín", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Delfin&backgroundColor=b6e3f4" },
        { name: "Tortuga", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Tortuga&backgroundColor=c0aede" },
        { name: "Pingüino", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Pinguino&backgroundColor=d1d4f9" },
        { name: "Koala", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Koala&backgroundColor=ffd5dc" },
        { name: "Lobo", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Lobo&backgroundColor=ffdfbf" },
        { name: "Zorro", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Zorro&backgroundColor=c0aede" },
        { name: "Jirafa", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Jirafa&backgroundColor=b6e3f4" }
    ],
    "Tecnología": [
        { name: "Robot", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Robot&backgroundColor=ffdfbf" },
        { name: "Laptop", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Laptop&backgroundColor=ffd5dc" },
        { name: "Smartphone", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Smartphone&backgroundColor=b6e3f4" },
        { name: "Gafas VR", img: "https://api.dicebear.com/7.x/bottts/svg?seed=VR&backgroundColor=c0aede" },
        { name: "Dron", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Dron&backgroundColor=ffd5dc" },
        { name: "Impresora 3D", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Impresora3D&backgroundColor=ffdfbf" },
        { name: "Satélite", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Satelite&backgroundColor=c0aede" },
        { name: "Consola", img: "https://api.dicebear.com/7.x/bottts/svg?seed=Consola&backgroundColor=b6e3f4" }
    ],
    "Historia": [
        { name: "Einstein", img: "https://api.dicebear.com/7.x/micah/svg?seed=Einstein&backgroundColor=b6e3f4" },
        { name: "Cleopatra", img: "https://api.dicebear.com/7.x/micah/svg?seed=Cleopatra&backgroundColor=ffd5dc" },
        { name: "Mozart", img: "https://api.dicebear.com/7.x/micah/svg?seed=Mozart&backgroundColor=c0aede" },
        { name: "Tesla", img: "https://api.dicebear.com/7.x/micah/svg?seed=Tesla&backgroundColor=d1d4f9" },
        { name: "Marie Curie", img: "https://api.dicebear.com/7.x/micah/svg?seed=MarieCurie&backgroundColor=ffd5dc" },
        { name: "Da Vinci", img: "https://api.dicebear.com/7.x/micah/svg?seed=DaVinci&backgroundColor=ffdfbf" },
        { name: "Gengis Kan", img: "https://api.dicebear.com/7.x/micah/svg?seed=GengisKan&backgroundColor=c0aede" },
        { name: "Juana de Arco", img: "https://api.dicebear.com/7.x/micah/svg?seed=JuanaDeArco&backgroundColor=b6e3f4" }
    ]
};

// --- ICONOS PARA CATEGORÍAS ---
const CAT_ICONS = {
    "Clase": "🎒",
    "Animales": "🦊",
    "Tecnología": "💻",
    "Historia": "⏳"
};

// Variables globales
let uploadedImageBase64 = "";
let currentCategory = "";

const app = {

    init() {
        // Cargar personajes guardados localmente
        this.loadLocalData();
        // Inicializar la vista
        this.renderCategoriesList();
    },

    loadLocalData() {
        const localData = localStorage.getItem("quienEsQuienDB");
        if (localData) {
            try {
                const parsed = JSON.parse(localData);
                // Combinamos preservando las categorías por defecto y la Clase
                for (let cat in parsed) {
                    if (!DB[cat]) {
                        DB[cat] = [];
                    }
                    // Sobreescribimos con lo guardado porque allí están los alumnos añadidos
                    DB[cat] = parsed[cat];
                }
            } catch (e) {
                console.error("Error leyendo LocalStorage", e);
            }
        }
    },

    saveLocalData() {
        localStorage.setItem("quienEsQuienDB", JSON.stringify(DB));
    },

    // --- MANEJO DE VISTAS (SPA) ---
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        // Si entramos a categorías, refrescamos por si se añadió un personaje nuevo
        if (screenId === 'screen-categories') {
            this.renderCategoriesList();
        }
    },

    // --- CATEGORÍAS ---
    renderCategoriesList() {
        const container = document.getElementById('categories-container');
        container.innerHTML = "";

        for (const cat in DB) {
            const count = DB[cat].length;
            const icon = CAT_ICONS[cat] || "🌟";
            
            const card = document.createElement('div');
            card.className = "category-card";
            card.onclick = () => this.startGame(cat);
            
            card.innerHTML = `
                <div class="category-icon">${icon}</div>
                <div class="category-title">${cat}</div>
                <p style="color: #666; font-size: 0.95rem;">${count} personajes</p>
            `;
            container.appendChild(card);
        }
    },

    // --- LÓGICA DEL TABLERO DE JUEGO ---
    startGame(category) {
        const heroes = DB[category];
        if (!heroes || heroes.length === 0) {
            alert(`No hay personajes en la categoría "${category}". ¡Ve al menú a añadir a alguien!`);
            return;
        }

        currentCategory = category;
        const icon = CAT_ICONS[category] || '';
        document.getElementById('game-title').innerText = `${category} ${icon}`;
        
        this.renderBoard(heroes);
        this.showScreen('screen-game');
    },

    renderBoard(heroesArray) {
        const board = document.getElementById('game-board');
        board.innerHTML = "";

        heroesArray.forEach((hero) => {
            const card = document.createElement('div');
            card.className = "flip-card";
            
            // Toggle de la clase is-flipped para ocultar (descartar)
            card.onclick = () => card.classList.toggle('is-flipped');

            const imgUrl = hero.img;

            card.innerHTML = `
                <div class="flip-card-inner">
                    <!-- Frente: Foto y Nombre -->
                    <div class="flip-card-front">
                        <div class="card-image-wrapper">
                            <img src="${imgUrl}" alt="${hero.name}" class="card-image">
                        </div>
                        <div class="card-name" title="${hero.name}">${hero.name}</div>
                    </div>
                    <!-- Reverso: Descartado -->
                    <div class="flip-card-back">
                        <span>❌</span>
                    </div>
                </div>
            `;
            board.appendChild(card);
        });
    },

    restartBoard() {
        if (currentCategory) {
            // Re-renderizar removerá la clase 'is-flipped' de todos
            this.renderBoard(DB[currentCategory]);
        }
    },

    // --- FORMULARIO Y SUBIDA DE IMÁGENES ---
    previewImage(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Validar tamaño máximo (2MB para no saturar LocalStorage rápido)
        if (file.size > 2 * 1024 * 1024) {
            alert("La imagen es muy pesada. Por favor sube una imagen menor a 2MB.");
            event.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImageBase64 = e.target.result;
            const previewBox = document.getElementById('image-preview-box');
            previewBox.innerHTML = `<img src="${uploadedImageBase64}" alt="Vista previa">`;
        };
        reader.readAsDataURL(file);
    },

    addCharacter(event) {
        event.preventDefault();

        const category = document.getElementById('char-category').value;
        const name = document.getElementById('char-name').value.trim();

        if (!name || !uploadedImageBase64) {
            alert("Por favor, ingresa un nombre y sube una foto.");
            return;
        }

        if (!DB[category]) {
            DB[category] = [];
        }

        // Insertar en la base de datos temporal
        DB[category].push({
            name: name,
            img: uploadedImageBase64
        });

        // Guardar la persistencia en el navegador
        this.saveLocalData();

        // Limpiar el formulario y la variable
        document.getElementById('add-char-form').reset();
        document.getElementById('image-preview-box').innerHTML = "<span>No hay imagen</span>";
        uploadedImageBase64 = "";

        // UI feedback y retorno seguro
        alert(`¡"${name}" ha sido añadido a la categoría "${category}" con éxito!`);
        this.showScreen('screen-categories');
    }
};

// Iniciar aplicación al cargar
window.onload = () => {
    app.init();
};
