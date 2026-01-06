// Arborele de decizie (Baza de date a lui Papinator)
const qaTree = {
    question: "Personajul tău este real?",
    yes: {
        question: "Este un sportiv?",
        yes: { result: "Gheorghe Hagi" },
        no: { result: "Andra" }
    },
    no: {
        question: "Are puteri magice?",
        yes: { result: "Harry Potter" },
        no: { result: "Mickey Mouse" }
    }
};

let currentNode = null;

function startGame() {
    currentNode = qaTree;
    showQuestion();
}

function showQuestion() {
    const textElement = document.getElementById('text');
    const optionsElement = document.getElementById('options');
    
    if (currentNode.question) {
        textElement.innerText = currentNode.question;
        optionsElement.innerHTML = `
            <button onclick="handleAnswer('yes')">DA</button>
            <button onclick="handleAnswer('no')">NU</button>
        `;
    } else {
        showResult();
    }
}

function handleAnswer(answer) {
    currentNode = currentNode[answer];
    showQuestion();
}

function showResult() {
    const textElement = document.getElementById('text');
    const optionsElement = document.getElementById('options');
    
    textElement.innerText = "Te-ai gândit la: " + currentNode.result + "!";
    optionsElement.innerHTML = `<button onclick="startGame()">Joacă din nou</button>`;
}
