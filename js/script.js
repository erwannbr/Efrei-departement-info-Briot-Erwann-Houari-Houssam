let cards = null;


async function fetchJSON(filePath) {
        const response = await fetch(filePath);
        
        const data = await response.json();
        
        cards = {
            common: data.communProfessor || [],
            rare: data.rareProfessor || [],
            legendary: data.legendaryProfessor || []
        };
        
        console.log("Cartes chargées:", cards);
}

async function chiffrealeatoire(){
    if (!cards) {
        await fetchJSON('../../../jsons/professors.json');
    }

    var random = Math.random();
    console.log(random);

    let selectedCard;

    if (random < 0.7) {
        if (cards.common.length > 0) {
            selectedCard = cards.common[Math.floor(Math.random() * cards.common.length)];
        }
    } else if (random < 0.95) {
        if (cards.rare.length > 0) {
            selectedCard = cards.rare[Math.floor(Math.random() * cards.rare.length)];
        } else {
            console.log("Error")
        }
    } else {
        if (cards.legendary.length > 0) {
            selectedCard = cards.legendary[Math.floor(Math.random() * cards.legendary.length)];
        } else {
            console.log("Error")
        }
    }
    
    displayCard(selectedCard);
    saveCard(selectedCard);
}

function saveCard(card) {
    if (!card) return;

    let collection = JSON.parse(localStorage.getItem(getCollectionKey()) || "[]");

    if (collection.some(c => c.name === card.name)) {
        return;
    }

    collection.push(card);
    localStorage.setItem(getCollectionKey(), JSON.stringify(collection));
}

function loadCollection() {
    const container = document.getElementById("collection-list");
    if (!container) return;

    const collection = JSON.parse(localStorage.getItem(getCollectionKey()) || "[]");

    container.innerHTML = "";

    if (collection.length === 0) {
        return;
    }

    for (const card of collection) {
        const div = document.createElement("div");
        div.className = "collection-card";
        div.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p>ATK: ${card.attack} | DEF: ${card.defense}</p>
        `;
        container.appendChild(div);
    }
}

function clearCollection() {
    if (confirm("Empty collection?")) {
        localStorage.removeItem(getCollectionKey());
        loadCollection();
    }
}

function exportCollection() {
    const collection = JSON.parse(localStorage.getItem(getCollectionKey()) || "[]");

    if (collection.length === 0) {
        alert("Collection empty, nothing to export !");
        return;
    }

    const json = JSON.stringify(collection, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ma-collection.json";
    a.click();

    URL.revokeObjectURL(url);
}

window.addEventListener("DOMContentLoaded", loadCollection);

function displayCard(card) {
    if (!card) return;

    const modal = document.getElementById("cardModal");
    const cardElement = document.querySelector(".card");
    const cardImage = document.getElementById("cardImage");

    if (card.image) {
        cardImage.src = card.image;
    }

    cardImage.alt = card.name;
    modal.style.display = "flex";

    if (cardElement) {
        cardElement.classList.remove("is-flipped");
        setTimeout(() => {
            cardElement.classList.add("is-flipped");
        }, 300);
    }
}

function toggleCardFlip() {
    const cardElement = document.querySelector(".card");
    if (cardElement) {
        cardElement.classList.toggle("is-flipped");
    }
}

function closeCard() {
    const modal = document.getElementById("cardModal");
    const cardElement = document.querySelector(".card");

    if (cardElement) {
        cardElement.classList.remove("is-flipped");
    }

    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("cardModal");
    if (event.target == modal) {
        const cardElement = document.querySelector(".card");

        if (cardElement) {
            cardElement.classList.remove("is-flipped");
        }

        modal.style.display = "none";
    }
}

function connexion() {
    var username = document.getElementById('Name').value;
    var password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill in both fields");
        return;
    }

    if (username == "houss" && password == "lpb"){
        localStorage.setItem("currentUser", "houss");
        window.location.href = "prof1/home.html";
    } else if (username == "erwann" && password == "lpb"){
        localStorage.setItem("currentUser", "erwann");
        window.location.href = "prof2/home.html";
    } else {
        alert("Wrong username or password");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "../connexion.html";
}

function getCollectionKey() {
    const user = localStorage.getItem("currentUser") || "guest";
    return "collection_" + user;
}
