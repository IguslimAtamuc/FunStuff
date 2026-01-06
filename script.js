let playerHP = 100;
let enemyHP = 100;

function log(text) {
    const consoleDiv = document.getElementById('console');
    consoleDiv.innerHTML += `<p>> ${text}</p>`;
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function startBattle() {
    if (playerHP <= 0 || enemyHP <= 0) return;

    // Animatie Erou
    const playerEl = document.getElementById('player');
    playerEl.classList.add('attack-left');
    setTimeout(() => playerEl.classList.remove('attack-left'), 200);

    // Calcul Damage
    let dmg = Math.floor(Math.random() * 20) + 5;
    enemyHP -= dmg;
    updateUI();
    log(`Ai lovit monstrul cu ${dmg} damage!`);

    if (enemyHP <= 0) {
        log("Inamic învins! Generăm un nou peisaj...");
        changeEnvironment();
        return;
    }

    // Contraatac Inamic
    setTimeout(() => {
        const enemyEl = document.getElementById('enemy');
        enemyEl.classList.add('attack-right');
        setTimeout(() => enemyEl.classList.remove('attack-right'), 200);

        let eDmg = Math.floor(Math.random() * 15) + 5;
        playerHP -= eDmg;
        updateUI();
        log(`Inamicul te-a lovit cu ${eDmg} damage!`);
    }, 600);
}

function updateUI() {
    document.getElementById('player-hp').style.width = playerHP + "%";
    document.getElementById('enemy-hp').style.width = enemyHP + "%";
}

// Simulare integrare AI pentru fundaluri noi
function changeEnvironment() {
    // În varianta reală, aici apelezi un API (OpenAI/Stability)
    // Exemplu: fetchAIImage("dungeon, dark, realistic, 4k");
    const backgrounds = [
        'https://images.unsplash.com/photo-1505506493753-1822c935400c?auto=format&fit=crop&w=1920&q=80', // Dungeon
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80', // Padure
        'https://images.unsplash.com/photo-1500622345453-7373fd83c972?auto=format&fit=crop&w=1920&q=80'  // Munte
    ];
    
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.getElementById('background-layer').style.backgroundImage = `url('${randomBg}')`;
    
    // Resetare inamic pentru "nivelul urmator"
    enemyHP = 100;
    updateUI();
}
