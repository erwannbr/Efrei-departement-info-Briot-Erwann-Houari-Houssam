let cards = null;

// Fetch les données depuis le JSON
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

function chiffrealeatoire(){
    var random = Math.random();
    console.log(random);

    if (!cards) {
        console.log("Chargement des cartes...");
        fetchJSON('../jsons/professors.json');
        return;
    }
    
    let selectedCard;

    if (random < 0.6) {
        console.log("Commun packed");
        if (cards.common.length > 0) {
            selectedCard = cards.common[Math.floor(Math.random() * cards.common.length)];
        }
    } else if (random < 0.9) {
        console.log("Rare packed");
        if (cards.rare.length > 0) {
            selectedCard = cards.rare[Math.floor(Math.random() * cards.rare.length)];
        } else {
            console.log("Error")
        }
    } else {
        console.log("Legendary packed");
        if (cards.legendary.length > 0) {
            selectedCard = cards.legendary[Math.floor(Math.random() * cards.legendary.length)];
        } else {
            console.log("Error")
        }
    }
    
    displayCard(selectedCard);
}

function displayCard(card) {
    const modal = document.getElementById("cardModal");
    const cardImage = document.getElementById("cardImage");

    if (card.image) {
        cardImage.src = card.image;
    } 
    
    cardImage.alt = card.name;
    modal.style.display = "flex";
}

function closeCard() {
    const modal = document.getElementById("cardModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("cardModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('load', function() {
    fetchJSON('../jsons/professors.json');
});