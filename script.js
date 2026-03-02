/**
 * LÓGICA DE LA APLICACIÓN SPA "QUIÉN ES EL IMPOSTOR" + TABLERO INTERACTIVO
 */

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

const avatarStyles = {
    "Animales": "bottts", "Países": "adventurer", "Profesiones": "avataaars", "Comida": "fun-emoji",
    "Deportes": "micah", "Objetos de Casa": "shapes", "Películas": "lorelei", "Partes del Cuerpo": "croodles",
    "Transporte": "bottts-neutral", "Marcas Famosas": "big-smile"
};
const bgColorOptions = ["ffd5dc", "b6e3f4", "c0aede", "d1d4f9", "ffdfbf", "eaf1e8", "fcf4dd", "ffecb3", "c7ceea", "ffb7b2"];

const DB = { "Mi Clase": [] }; // Cartas customizadas
const CAT_ICONS = {
    "Mi Clase": "🎒", "Animales": "🦊", "Países": "🌎", "Profesiones": "👩‍⚕️", "Comida": "🍔",
    "Deportes": "⚽", "Objetos de Casa": "🛋️", "Películas": "🎬", "Partes del Cuerpo": "👂",
    "Transporte": "🚗", "Marcas Famosas": "🏷️"
};

// Autogenerar avatares para las categorías default
for (const cat in palabrasOriginales) {
    DB[cat] = [];
    palabrasOriginales[cat].forEach(palabra => {
        const style = avatarStyles[cat] || "fun-emoji";
        const bgColor = bgColorOptions[palabra.length % bgColorOptions.length];
        DB[cat].push({ name: palabra, img: `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(palabra)}&backgroundColor=${bgColor}` });
    });
}

// ESTADO DEL JUEGO (SPYFALL/AMONG US)
let players = []; // { name: "...", score: 0 }
let currentRound = {
    category: "",
    word: "",
    impostorIndices: [],
    playerIndex: 0
};
let uploadedImageBase64 = "";

const app = {
    init() {
        this.loadLocalData();
        this.populateCategorySelect();
    },

    loadLocalData() {
        const localData = localStorage.getItem("quienEsQuienDB_Ghibli");
        if (localData) {
            try {
                const parsed = JSON.parse(localData);
                if (parsed["Mi Clase"]) DB["Mi Clase"] = parsed["Mi Clase"];
            } catch (e) { console.error(e); }
        }
    },

    saveLocalData() {
        const dataToSave = { "Mi Clase": DB["Mi Clase"] };
        localStorage.setItem("quienEsQuienDB_Ghibli", JSON.stringify(dataToSave));
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        const nextScreen = document.getElementById(screenId);
        nextScreen.classList.add('active');
        nextScreen.scrollTop = 0;
    },

    // --- SETUP DE JUEGO MULTIJUGADOR ---
    goToNames() {
        const num = parseInt(document.getElementById('num-players').value);
        const imps = parseInt(document.getElementById('num-impostors').value);

        if (imps >= num) {
            alert("¡Cuidado capitanes! ¡No puede haber tantos impostores como tripulantes!");
            return;
        }

        const container = document.getElementById('names-inputs');
        container.innerHTML = "";

        for (let i = 0; i < num; i++) {
            container.innerHTML += `<div class="form-group"><input type="text" id="pname-${i}" placeholder="Nombre Tripulante ${i + 1}" value="Jugador ${i + 1}"></div>`;
        }
        this.showScreen('screen-names');
    },

    startGameSetup() {
        const num = parseInt(document.getElementById('num-players').value);
        // Si players ya tiene datos de la ronda anterior, respetamos los puntajes, sino iniciamos
        if (players.length !== num) {
            players = [];
            for (let i = 0; i < num; i++) {
                const name = document.getElementById(`pname-${i}`).value;
                players.push({ name: name, score: 0 });
            }
        } else {
            // Actualizar nombres por si los cambiaron pero mantener puntaje
            for (let i = 0; i < num; i++) {
                players[i].name = document.getElementById(`pname-${i}`).value;
            }
        }
        this.goToCategory();
    },

    goToCategory() {
        this.renderCategoriesList();
        this.showScreen('screen-categories');
    },

    renderCategoriesList() {
        const container = document.getElementById('categories-container');
        container.innerHTML = "";

        for (const cat in DB) {
            const count = DB[cat].length;
            const icon = CAT_ICONS[cat] || "🌟";

            const card = document.createElement('div');
            card.className = "category-card bouncy";
            card.onclick = () => this.startRound(cat); // Inicia el pase de la bomba/dispositivo

            card.innerHTML = `
                <div class="category-icon">${icon}</div>
                <div class="category-title">${cat}</div>
                <div class="category-badge">${count} Palabras</div>
            `;
            container.appendChild(card);
        }
    },

    populateCategorySelect() {
        const select = document.getElementById('char-category');
        select.innerHTML = "";
        for (const cat in DB) { select.innerHTML += `<option value="${cat}">${cat}</option>`; }
    },

    // --- LÓGICA DE ROUND SPYFALL ---
    startRound(category) {
        if (DB[category].length === 0) {
            alert(`No hay palabras en la categoría "${category}". Añade cartas primero.`);
            return;
        }

        // Elegir palabra aleatoria
        const wordObj = DB[category][Math.floor(Math.random() * DB[category].length)];

        // Elegir impostores
        const numImpostors = parseInt(document.getElementById('num-impostors').value);
        let impostors = [];
        while (impostors.length < numImpostors) {
            let r = Math.floor(Math.random() * players.length);
            if (!impostors.includes(r)) impostors.push(r);
        }

        currentRound = {
            category: category,
            word: wordObj.name,
            impostorIndices: impostors,
            playerIndex: 0
        };

        this.showNextPlayerCard();
    },

    showNextPlayerCard() {
        if (currentRound.playerIndex >= players.length) {
            // Se lo pasaron todos, ¡ahora al tablero de juego para debatir!
            this.prepareBoard(currentRound.category);
            this.showScreen('screen-game');
            return;
        }

        const pIdx = currentRound.playerIndex;
        document.getElementById('current-player-name').innerText = players[pIdx].name;
        document.getElementById('card-content').classList.add('hidden');
        document.getElementById('btn-show').classList.remove('hidden');
        document.getElementById('btn-next').classList.add('hidden');

        this.showScreen('screen-reveal');
    },

    revealRole() {
        const pIdx = currentRound.playerIndex;
        const isImpostor = currentRound.impostorIndices.includes(pIdx);

        const roleDiv = document.getElementById('role-text');
        const hintDiv = document.getElementById('category-hint');

        if (isImpostor) {
            roleDiv.innerHTML = "🚨 ERES EL IMPOSTOR 🚨";
            roleDiv.style.color = "var(--clr-accent)";
            roleDiv.style.borderColor = "var(--clr-accent)";
            hintDiv.innerText = `Intenta adivinar la palabra o pasa desapercibido en la categoría: ${currentRound.category}.`;
        } else {
            roleDiv.innerHTML = `✔️ ${currentRound.word}`;
            roleDiv.style.color = "var(--clr-primary-dark)";
            roleDiv.style.borderColor = "var(--clr-primary)";
            hintDiv.innerText = `Temática general: ${currentRound.category}. ¡Mantenlo en secreto!`;
        }

        document.getElementById('card-content').classList.remove('hidden');
        document.getElementById('btn-show').classList.add('hidden');
        document.getElementById('btn-next').classList.remove('hidden');
    },

    nextPlayer() {
        currentRound.playerIndex++;
        this.showNextPlayerCard();
    },

    // --- TABLERO DE JUEGO (Discusión Visual) ---
    prepareBoard(category) {
        document.getElementById('game-title').innerText = `Tablero: ${category} ${CAT_ICONS[category] || ''}`;
        this.renderBoard(DB[category]);
    },

    renderBoard(heroesArray) {
        const board = document.getElementById('game-board');
        board.innerHTML = "";

        // En lugar de iterar ordenado, las mostramos ordenadas (en el "Quién es quién" es útil encontrarlas rápido o mezcladas).
        // El Guess Who original es ordenado para buscar rápido.
        heroesArray.forEach((hero) => {
            const card = document.createElement('div');
            card.className = "flip-card";
            card.onclick = () => card.classList.toggle('is-flipped'); // Discard animation

            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-image-wrapper"><img src="${hero.img}" class="card-image" loading="lazy"></div>
                        <div class="card-name"><span>${hero.name}</span></div>
                    </div>
                    <div class="flip-card-back"><div class="cross-mark">🙈</div></div>
                </div>
            `;
            board.appendChild(card);
        });
    },

    restartBoard() {
        const board = document.getElementById('game-board');
        board.style.opacity = 0;
        setTimeout(() => {
            this.renderBoard(DB[currentRound.category]); // Esto resetea el toggle de 'is-flipped'
            board.style.opacity = 1;
        }, 300);
    },

    // --- REVELACIÓN DE RESULTADOS Y PUNTAJES ---
    revealImpostors() {
        if (!confirm("¿Seguro que ya identificaron al impostor o terminó es tiempo de debate?")) return;

        const impNames = currentRound.impostorIndices.map(i => players[i].name).join(" y ");
        document.getElementById('impostor-names').innerText = impNames;
        document.getElementById('secret-word').innerText = currentRound.word;

        this.renderScoring();
        this.showScreen('screen-scores');
    },

    renderScoring() {
        const container = document.getElementById('scoring-area');
        container.innerHTML = "";

        players.forEach((p, index) => {
            const isImp = currentRound.impostorIndices.includes(index);
            const roleTag = isImp ? `<span class="tag" style="background:var(--clr-accent)">IMPOSTOR</span>` : `<span class="tag" style="background:var(--clr-primary)">TRIPULANTE</span>`;

            container.innerHTML += `
                <div class="player-score">
                    <div>
                        <strong>${p.name}</strong> ${roleTag} <br>
                        <small style="color:#666; font-size:0.9rem;">Pts: <span id="pts-${index}" style="font-weight:900;">${p.score}</span></small>
                    </div>
                    <button class="score-btn bouncy" style="background-color: var(--clr-grass); border: 2px solid var(--clr-primary-dark); color: var(--clr-primary-dark);" onclick="app.addPoint(${index})">➕</button>
                    <!-- <button class="score-btn bouncy" style="background-color: #ffb7b2; border: 2px solid #ff006e; color: #ff006e;" onclick="app.removePoint(${index})">➖</button> -->
                </div>
            `;
        });
    },

    addPoint(playerIndex) {
        players[playerIndex].score++;
        document.getElementById(`pts-${playerIndex}`).innerText = players[playerIndex].score;
    },

    showLeaderboard() {
        const list = document.getElementById('scoreboard-list');
        const sorted = [...players].sort((a, b) => b.score - a.score);

        list.innerHTML = "";
        sorted.forEach((p, i) => {
            let medal = "🏅";
            if (i === 0) medal = "🥇"; if (i === 1) medal = "🥈"; if (i === 2) medal = "🥉";
            list.innerHTML += `
                <div class="player-score" style="font-size: 1.5rem; justify-content: flex-start; padding: 20px;">
                    <strong style="width: 40px; color: var(--clr-secondary-dark);">${medal}</strong>
                    <span style="flex-grow: 1; text-align: left; margin-left: 10px;">${p.name}</span>
                    <strong style="color: var(--clr-primary-dark);">${p.score} pts</strong>
                </div>
            `;
        });
        this.showScreen('screen-leaderboard');
    },

    // --- FORMULARIO CUSTOM ---
    previewImage(event) {
        const file = event.target.files[0];
        if (!file) return;
        if (file.size > 1 * 1024 * 1024) {
            alert("¡Wow, qué foto tan pesada! Por favor elige una imagen que pese menos de 1 MB.");
            event.target.value = ""; return;
        }
        const reader = new FileReader();
        reader.onload = e => {
            uploadedImageBase64 = e.target.result;
            document.getElementById('image-preview-box').innerHTML = `<img src="${uploadedImageBase64}">`;
        };
        reader.readAsDataURL(file);
    },

    addCharacter(event) {
        event.preventDefault();
        const category = document.getElementById('char-category').value;
        const name = document.getElementById('char-name').value.trim();

        if (!name) return;

        let finalImage = uploadedImageBase64;
        if (!finalImage) {
            const style = avatarStyles[category] || "fun-emoji";
            const bgColor = bgColorOptions[Math.floor(Math.random() * bgColorOptions.length)];
            finalImage = `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(name)}&backgroundColor=${bgColor}`;
        }

        if (!DB[category]) DB[category] = [];
        DB[category].unshift({ name: name, img: finalImage });

        this.saveLocalData();
        document.getElementById('add-char-form').reset();
        document.getElementById('image-preview-box').innerHTML = "<span>Sin foto</span>";
        uploadedImageBase64 = "";

        alert(`¡✨ La carta secreta "${name}" ha sido añadida a la categoría "${category}" con éxito!`);
        this.showScreen('screen-menu');
    }
};

window.onload = () => app.init();
