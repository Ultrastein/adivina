/**
 * LÓGICA DE LA APLICACIÓN SPA "QUIÉN ES QUIÉN"
 */

// Las listas de palabras originales (10 categorías x 40 palabras)
const palabrasOriginales = {
    "Animales": ["León", "Elefante", "Tiburón", "Águila", "Pingüino", "Jirafa", "Koala", "Canguro", "Oso Polar", "Tigre", "Lobo", "Delfín", "Ballena", "Murciélago", "Camello", "Cocodrilo", "Serpiente", "Hormiga", "Abeja", "Mariposa", "Pulpo", "Medusa", "Caballo", "Vaca", "Cerdo", "Gato", "Perro", "Ratón", "Conejo", "Tortuga", "Loro", "Búho", "Flamenco", "Gorila", "Mono", "Panda", "Zorro", "Hipopótamo", "Rinoceronte", "Cebra"],
    "Países": ["Argentina", "Brasil", "España", "Francia", "Italia", "Alemania", "Japón", "China", "Estados Unidos", "México", "Canadá", "Australia", "Rusia", "India", "Egipto", "Sudáfrica", "Inglaterra", "Portugal", "Colombia", "Perú", "Chile", "Uruguay", "Grecia", "Turquía", "Corea del Sur", "Tailandia", "Vietnam", "Marruecos", "Kenia", "Nueva Zelanda", "Suecia", "Noruega", "Finlandia", "Polonia", "Ucrania", "Cuba", "Jamaica", "Venezuela", "Paraguay", "Bolivia"],
    "Profesiones": ["Médico", "Ingeniero", "Abogado", "Maestro", "Policía", "Bombero", "Cocinero", "Carpintero", "Electricista", "Mecánico", "Programador", "Diseñador", "Arquitecto", "Piloto", "Azafata", "Periodista", "Actor", "Músico", "Pintor", "Escritor", "Científico", "Astronauta", "Veterinario", "Dentista", "Psicólogo", "Juez", "Agricultor", "Pescador", "Panadero", "Carnicero", "Fontanero", "Soldado", "Futbolista", "Entrenador", "Jardinero", "Fotógrafo", "Modelo", "Bailarín", "Cantante", "Director"],
    "Comida": ["Pizza", "Hamburguesa", "Sushi", "Tacos", "Paella", "Asado", "Empanadas", "Helado", "Chocolate", "Ensalada", "Sopa", "Espaguetis", "Lasaña", "Pollo Frito", "Papas Fritas", "Huevo Frito", "Tortilla", "Panqueques", "Waffles", "Donas", "Pastel", "Galletas", "Fruta", "Verdura", "Arroz", "Fideos", "Pescado", "Mariscos", "Queso", "Jamón", "Salchicha", "Tocino", "Yogur", "Cereal", "Tostadas", "Sandwich", "Burrito", "Curry", "Ramen", "Ceviche"],
    "Deportes": ["Fútbol", "Baloncesto", "Tenis", "Golf", "Natación", "Atletismo", "Boxeo", "Voleibol", "Béisbol", "Rugby", "Hockey", "Ciclismo", "Esquí", "Snowboard", "Surf", "Skate", "Karate", "Judo", "Taekwondo", "Lucha Libre", "Automovilismo", "Motociclismo", "Gimnasia", "Patinaje", "Remo", "Escalada", "Pesca", "Caza", "Tiro con Arco", "Bolos", "Billar", "Dardos", "Ajedrez", "Ping Pong", "Bádminton", "Balonmano", "Waterpolo", "Equitación", "Póker", "Crossfit"],
    "Objetos de Casa": ["Mesa", "Silla", "Sofá", "Cama", "Armario", "Lámpara", "Espejo", "Alfombra", "Cortina", "Televisor", "Computadora", "Teléfono", "Reloj", "Estufa", "Nevera", "Lavadora", "Secadora", "Microondas", "Licuadora", "Tostadora", "Cafetera", "Plato", "Vaso", "Tenedor", "Cuchillo", "Cuchara", "Sartén", "Olla", "Escoba", "Trapeador", "Aspiradora", "Plancha", "Toalla", "Jabón", "Champú", "Cepillo", "Peine", "Llave", "Puerta", "Ventana"],
    "Películas": ["Terror", "Comedia", "Acción", "Romance", "Ciencia Ficción", "Fantasía", "Drama", "Musical", "Documental", "Animación", "Western", "Thriller", "Misterio", "Aventura", "Guerra", "Biografía", "Crimen", "Familia", "Historia", "Deporte", "Superhéroes", "Zombies", "Vampiros", "Espacio", "Viajes tiempo", "Robots", "Monstruos", "Magia", "Espías", "Policial", "Catástrofes", "Navidad", "Halloween", "Cortometraje", "Cine Mudo", "Blanco y Negro", "Musical Disney", "Anime", "Slasher", "Cyberpunk"],
    "Partes del Cuerpo": ["Cabeza", "Ojo", "Oreja", "Nariz", "Boca", "Diente", "Lengua", "Cuello", "Hombro", "Brazo", "Codo", "Mano", "Dedo", "Uña", "Pecho", "Espalda", "Estómago", "Ombligo", "Cadera", "Pierna", "Rodilla", "Tobillo", "Pie", "Talón", "Cerebro", "Corazón", "Pulmón", "Hígado", "Riñón", "Hueso", "Músculo", "Sangre", "Piel", "Pelo", "Barba", "Bigote", "Ceja", "Pestaña", "Garganta", "Muñeca"],
    "Transporte": ["Coche", "Camión", "Autobús", "Moto", "Bicicleta", "Tren", "Metro", "Avión", "Helicóptero", "Barco", "Submarino", "Cohete", "Globo", "Monopatín", "Patines", "Taxi", "Ambulancia", "Patrulla", "Bomberos", "Tractor", "Grúa", "Excavadora", "Yate", "Velero", "Canoa", "Kayak", "Crucero", "Teleférico", "Ascensor", "Escaleras", "Caballo", "Carreta", "Trineo", "Segway", "Dron", "Paracaídas", "Ala Delta", "Jet Ski", "Tranvía", "Funicular"],
    "Marcas Famosas": ["Coca-Cola", "Pepsi", "McDonald's", "Burger King", "Nike", "Adidas", "Puma", "Apple", "Samsung", "Microsoft", "Google", "Amazon", "Facebook", "Twitter", "Instagram", "Toyota", "Ford", "Chevrolet", "Ferrari", "BMW", "Mercedes", "Audi", "Honda", "Sony", "Nintendo", "PlayStation", "Xbox", "Netflix", "Disney", "Marvel", "Lego", "Ikea", "Starbucks", "Zara", "H&M", "Louis Vuitton", "Gucci", "Rolex", "Visa", "Mastercard"]
};

// Generar la Base de Datos con avatares visuales divertidos para "Quién es Quién"
const DB = {
    "Mi Clase": [] // Reservado para los que agregue el usuario
};

// Mapeos de estilo de avatar por categoría para que todos tengan "caritas" o "personajes" para identificar
// Así el Guess Who sigue siendo divertido ("¿El personaje tiene gafas?", "¿Es un robot?")
const avatarStyles = {
    "Animales": "bottts", // Robots tiernos
    "Países": "adventurer", // Personajes al estilo juego de rol
    "Profesiones": "avataaars", // Personajes humanos detallados
    "Comida": "fun-emoji", // Caritas divertidas
    "Deportes": "micah", // Personajes modernos
    "Objetos de Casa": "shapes", // Formas geométricas divertidas
    "Películas": "lorelei", // Personajes expresivos animados
    "Partes del Cuerpo": "croodles", // Dibujos a mano
    "Transporte": "bottts-neutral", // Robots neutrales
    "Marcas Famosas": "big-smile" // Sonrisas grandes
};

// Colores pastel tipo Ghibli para los fondos de avatares
const bgColorOptions = ["ffd5dc", "b6e3f4", "c0aede", "d1d4f9", "ffdfbf", "eaf1e8", "fcf4dd", "ffecb3", "c7ceea", "ffb7b2"];

// Poblar la BD
for (const cat in palabrasOriginales) {
    DB[cat] = [];
    palabrasOriginales[cat].forEach((palabra) => {
        const style = avatarStyles[cat] || "fun-emoji";
        // Asignamos un color al azar o determinístico basado en la palabra
        const bgColor = bgColorOptions[palabra.length % bgColorOptions.length];
        const imgUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(palabra)}&backgroundColor=${bgColor}`;
        DB[cat].push({ name: palabra, img: imgUrl });
    });
}

// --- ICONOS PARA CATEGORÍAS ---
const CAT_ICONS = {
    "Mi Clase": "🎒",
    "Animales": "🦊",
    "Países": "🌎",
    "Profesiones": "👩‍⚕️",
    "Comida": "🍔",
    "Deportes": "⚽",
    "Objetos de Casa": "🛋️",
    "Películas": "🎬",
    "Partes del Cuerpo": "👂",
    "Transporte": "🚗",
    "Marcas Famosas": "🏷️"
};

// Variables globales
let uploadedImageBase64 = "";
let currentCategory = "";

const app = {

    init() {
        // Cargar personajes guardados localmente
        this.loadLocalData();
        // Generar las vistas de los selectores dinámicamente
        this.populateCategorySelect();
        // Inicializar la vista
        this.renderCategoriesList();
    },

    loadLocalData() {
        const localData = localStorage.getItem("quienEsQuienDB_Ghibli");
        if (localData) {
            try {
                const parsed = JSON.parse(localData);
                // Restauramos solo las cartas de "Mi Clase" u otras creadas custom
                for (let cat in parsed) {
                    if (!DB[cat]) {
                        DB[cat] = [];
                    }
                    // Ojo: Si la categoría ya tiene cartas generadas arriba (las 400), solo añadimos las que faltan (o las combinamos).
                    // Pero para hacerlo fácil, asumimos que Custom DB guarda TODO. 
                    // Como el JSON tiene 400 items, para no pisar si cambiamos el código, solo recuperamos las manuales.
                    // Para identificar manuales, podríamos marcarlas, o simplemente confiar en la BD de "Mi Clase".
                    if (cat === "Mi Clase") {
                        DB[cat] = parsed[cat];
                    }
                }
            } catch (e) {
                console.error("Error leyendo LocalStorage", e);
            }
        }
    },

    saveLocalData() {
        // Solo guardamos "Mi Clase" para ahorrar localstorage y no exceder los límites
        const dataToSave = {
            "Mi Clase": DB["Mi Clase"]
        };
        localStorage.setItem("quienEsQuienDB_Ghibli", JSON.stringify(dataToSave));
    },

    populateCategorySelect() {
        const select = document.getElementById('char-category');
        select.innerHTML = "";
        for (const cat in DB) {
            const option = document.createElement('option');
            option.value = cat;
            option.innerText = cat;
            select.appendChild(option);
        }
    },

    // --- MANEJO DE VISTAS (SPA) ---
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));

        const nextScreen = document.getElementById(screenId);
        nextScreen.classList.add('active');

        // Pequeño desplazamiento de scroll al inicio
        nextScreen.scrollTop = 0;

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
            card.className = "category-card bouncy";
            card.onclick = () => this.startGame(cat);

            card.innerHTML = `
                <div class="category-icon">${icon}</div>
                <div class="category-title">${cat}</div>
                <div class="category-badge">${count} Cartas</div>
            `;
            container.appendChild(card);
        }
    },

    // --- LÓGICA DEL TABLERO DE JUEGO ---
    startGame(category) {
        const heroes = DB[category];
        if (!heroes || heroes.length === 0) {
            alert(`¡Magia! Aún no hay personajes en "${category}". ¡Añade a tus alumnos en el menú principal!`);
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
            card.onclick = () => {
                card.classList.toggle('is-flipped');
                // Efecto de sonido (opcional, dejamos el espacio por si el profe quiere agregarlo luego)
            };

            const imgUrl = hero.img;

            // Frente de la carta brillante y clara, reverso un patrón de "Descartado" (malla)
            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-image-wrapper">
                            <img src="${imgUrl}" alt="${hero.name}" class="card-image" loading="lazy">
                        </div>
                        <div class="card-name" title="${hero.name}"><span>${hero.name}</span></div>
                    </div>
                    <div class="flip-card-back">
                        <div class="cross-mark">🙈</div>
                    </div>
                </div>
            `;
            board.appendChild(card);
        });
    },

    restartBoard() {
        if (currentCategory) {
            // Añadir animación de re-mezcla al tablero al reiniciar
            const board = document.getElementById('game-board');
            board.style.opacity = 0;
            setTimeout(() => {
                this.renderBoard(DB[currentCategory]);
                board.style.opacity = 1;
            }, 300);
        }
    },

    // --- FORMULARIO Y SUBIDA DE IMÁGENES ---
    previewImage(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Validar tamaño máximo (1MB para LocalStorage)
        if (file.size > 1 * 1024 * 1024) {
            alert("¡Wow, qué foto tan pesada! Por favor elige una imagen que pese menos de 1 MB.");
            event.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
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

        if (!name || (!uploadedImageBase64 && category === "Mi Clase")) {
            alert("Falta el nombre de la carta, o su foto estrellada.");
            return;
        }

        if (!DB[category]) {
            DB[category] = [];
        }

        // Si no subió imagen en una categoría genérica, podemos auto-generarle una con Dicebear
        let finalImage = uploadedImageBase64;
        if (!finalImage) {
            const style = avatarStyles[category] || "fun-emoji";
            const bgColor = bgColorOptions[Math.floor(Math.random() * bgColorOptions.length)];
            finalImage = `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(name)}&backgroundColor=${bgColor}`;
        }

        // Insertar en la base de datos temporal (al inicio para que lo vea rápido)
        DB[category].unshift({
            name: name,
            img: finalImage
        });

        // Guardar la persistencia en el navegador
        this.saveLocalData();

        // Limpiar el formulario y la variable
        document.getElementById('add-char-form').reset();
        document.getElementById('image-preview-box').innerHTML = "<span>Sin foto</span>";
        uploadedImageBase64 = "";

        // UI feedback y retorno seguro
        alert(`¡✨ "${name}" ha sido añadido a la categoría "${category}" con éxito!`);
        this.showScreen('screen-categories');
    }
};

// Iniciar aplicación al cargar
window.onload = () => {
    app.init();
};
