let intentsData = [];


function loadJSON() {
    fetch('../../../jsons/intents.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        intentsData = data.intents;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function sendMessage() {

    let input = document.getElementById("user-input");
    let messageUser = input.value;

    if (messageUser.trim() === "") return;

    showMessage(messageUser, "user");

    let response = processMessage(intentsData, messageUser);

    showMessage(response, "bot");

    input.value = "";
}

function showMessage(message, type) {
    let chatBox = document.getElementById("chat-box");
    let msg = document.createElement("p");

    msg.textContent = (type === "user" ? "Me: " : "Bot: ") + message;

    chatBox.appendChild(msg);
}

function processMessage(intents, message) {

    let response = "I'm sorry, I don't understand. Can you rephrase?";

    intents.forEach(intent => {
        intent.patterns.forEach(pattern => {
            if (message.toLowerCase().includes(pattern.toLowerCase())) {
                response = intent.responses[
                    Math.floor(Math.random() * intent.responses.length)
                ];
            }
        });
    });

    return response;
}

// Charger au démarrage
window.onload = loadJSON;