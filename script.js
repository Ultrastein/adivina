/**
 * LÓGICA DE LA APLICACIÓN SPA "QUIÉN ES EL IMPOSTOR" (Toda la Dinámica Spyfall Restaurada)
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

// Data base
const DB = { "Mi Clase": [] }; // Cartas customizadas
const CAT_ICONS = {
    "Mi Clase": "🎒", "Animales": "🦊", "Países": "🌎", "Profesiones": "👩‍⚕️", "Comida": "🍔",
    "Deportes": "⚽", "Objetos de Casa": "🛋️", "Películas": "🎬", "Partes del Cuerpo": "👂",
    "Transporte": "🚗", "Marcas Famosas": "🏷️"
};

// Poblar la DB local
for (const cat in palabrasOriginales) {
    DB[cat] = palabrasOriginales[cat];
}

// ESTADO DEL JUEGO (SPYFALL/AMONG US)
let players = []; // { name: "...", score: 0 }
let selectedCategories = []; // Array de nombres de cats seleccionadas
let poolWords = []; // Todas las palabras de las categorías seleccionadas
let currentRound = {
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
            container.innerHTML += `<div class="form-group"><input type="text" id="pname-${i}" placeholder="Nombre Jugador ${i + 1}" value="Jugador ${i + 1}"></div>`;
        }
        this.showScreen('screen-names');
    },

    goToCategory() {
        const num = parseInt(document.getElementById('num-players').value);

        // Registrar o actualizar los nombres manteniendo puntuación
        if (players.length !== num) {
            players = [];
            for (let i = 0; i < num; i++) {
                const name = document.getElementById(`pname-${i}`).value;
                players.push({ name: name, score: 0 });
            }
        } else {
            for (let i = 0; i < num; i++) {
                players[i].name = document.getElementById(`pname-${i}`).value;
            }
        }

        this.renderCategoriesList();
        this.showScreen('screen-categories');
    },

    renderCategoriesList() {
        const container = document.getElementById('categories-container');
        container.innerHTML = "";
        selectedCategories = []; // Reseteamos selecciones previas

        for (const cat in DB) {
            const count = DB[cat].length;
            if (count === 0) continue; // Si 'Mi Clase' está vacío, no se muestra

            const icon = CAT_ICONS[cat] || "🌟";

            const card = document.createElement('div');
            card.className = "category-card";
            card.id = `cat-card-${cat}`;

            // Toggle selection
            card.onclick = () => {
                card.classList.toggle('selected');
                if (card.classList.contains('selected')) {
                    selectedCategories.push(cat);
                } else {
                    selectedCategories = selectedCategories.filter(c => c !== cat);
                }
            };

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

    // --- LÓGICA PASO A PASO DEL ROUND (SPYFALL) ---
    startRound() {
        if (selectedCategories.length === 0) {
            alert("¡Eh! Debes seleccionar al menos una categoría para poder jugar.");
            return;
        }

        // Construir el pool de palabras con las categorías seleccionadas
        poolWords = [];
        selectedCategories.forEach(cat => {
            DB[cat].forEach(word => poolWords.push({ name: typeof word === 'string' ? word : word.name, category: cat }));
        });

        // Elegir palabra aleatoria
        const randomWordObj = poolWords[Math.floor(Math.random() * poolWords.length)];

        // Elegir impostores
        const numImpostors = parseInt(document.getElementById('num-impostors').value);
        let impostors = [];
        while (impostors.length < numImpostors) {
            let r = Math.floor(Math.random() * players.length);
            if (!impostors.includes(r)) impostors.push(r);
        }

        currentRound = {
            word: randomWordObj.name,
            impostorIndices: impostors,
            playerIndex: 0
        };

        this.showNextPlayerCard();
    },

    showNextPlayerCard() {
        if (currentRound.playerIndex >= players.length) {
            // Se lo pasaron todos, ¡pasamos a la Discusión!
            this.prepareDiscussion();
            this.showScreen('screen-discussion');
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
            hintDiv.innerText = `Intenta adivinar la palabra o pasa desapercibido prestando atención a lo que dicen los demás.`;
        } else {
            roleDiv.innerHTML = `✔️ ${currentRound.word}`;
            roleDiv.style.color = "var(--clr-primary-dark)";
            roleDiv.style.borderColor = "var(--clr-primary)";
            hintDiv.innerText = `Categorías en juego: ${selectedCategories.join(', ')}. ¡Mantenlo en secreto!`;
        }

        document.getElementById('card-content').classList.remove('hidden');
        document.getElementById('btn-show').classList.add('hidden');
        document.getElementById('btn-next').classList.remove('hidden');
    },

    nextPlayer() {
        currentRound.playerIndex++;
        this.showNextPlayerCard();
    },

    // --- DISCUSIÓN ---
    prepareDiscussion() {
        const modalContent = document.getElementById('word-list-content');
        modalContent.innerHTML = "";

        // Agrupar visualmente la lista de palabras por categoría por si quieren mirarla
        poolWords.forEach(w => {
            modalContent.innerHTML += `<span class="word-tag">${w.name} <small style="color:#888;">(${w.category})</small></span>`;
        });
    },

    // --- REVELACIÓN DE RESULTADOS Y PUNTAJES ---
    revealImpostors() {
        if (!confirm("¿Seguro que quieren terminar el tiempo de debate?")) return;

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
                        <small style="color:#666; font-size:0.9rem;">Pts Actuales: <span id="pts-${index}" style="font-weight:900;">${p.score}</span></small>
                    </div>
                    <button class="score-btn bouncy" style="background-color: var(--clr-grass); border: 2px solid var(--clr-primary-dark); color: var(--clr-primary-dark);" onclick="app.addPoint(${index})">Punto +1</button>
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
    addCharacter(event) {
        event.preventDefault();
        const category = document.getElementById('char-category').value;
        const name = document.getElementById('char-name').value.trim();

        if (!name) return;

        if (!DB[category]) DB[category] = [];

        // Podemos guardar solo el string o el objeto
        DB[category].unshift({ name: name });

        this.saveLocalData();
        document.getElementById('add-char-form').reset();
        alert(`¡✨ La nueva palabra secreta "${name}" ha sido añadida a la categoría "${category}" con éxito!`);
        this.showScreen('screen-menu');
    }
};

window.onload = () => app.init();
