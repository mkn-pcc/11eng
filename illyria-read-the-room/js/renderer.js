function scaleContainer() {
    const container = document.getElementById("game-container");
    const scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    container.style.transform = `scale(${scale})`;
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.replace("active", "hidden"));
    document.getElementById(screenId).classList.replace("hidden", "active");
}

function showPopup(text) {
    // Changed from innerText to innerHTML so <b> and <br> tags render correctly
    document.getElementById("popup-text").innerHTML = text;
    document.getElementById("popup-overlay").classList.remove("hidden");
}

function hidePopup() {
    document.getElementById("popup-overlay").classList.add("hidden");
}

function renderAvatars() {
    const grid = document.getElementById("avatar-grid");
    grid.innerHTML = "";
    avatarsData.forEach(avatar => {
        const img = document.createElement("img");
        img.src = avatar.full;
        img.className = "avatar-card";
        img.addEventListener("click", () => selectAvatar(avatar));
        grid.appendChild(img);
    });
}

function updateHUD() {
    document.getElementById("hud-avatar").src = gameState.avatar.small;
    const health = getSocialHealth();
    document.getElementById("hud-bar-fill").style.width = health + "%";
    document.getElementById("hud-val").innerText = health + "%";
}

function renderScene(sceneData) {
    document.getElementById("screen-game").style.backgroundImage = `url('${sceneData.bg}')`;
    
    const currentNode = sceneData.nodes[gameState.nodeIndex];
    const npc = charactersData[currentNode.npcId];
    
    const portrait = document.getElementById("npc-portrait");
    portrait.src = `${npc.basePath}/neutral.png`;
    portrait.classList.remove("hidden");

    document.getElementById("speaker-nameplate").classList.remove("hidden");
    document.getElementById("speaker-name").innerText = npc.name;
    document.getElementById("dialogue-text").innerText = currentNode.narrative + "\n\n\"" + currentNode.dialogue + "\"";

    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
    document.getElementById("btn-next").classList.add("hidden");

    currentNode.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-text-btn";
        btn.innerText = choice.text;
        btn.addEventListener("click", () => handleChoice(choice, npc));
        choicesContainer.appendChild(btn);
    });
}

function renderReaction(reactionObj, exp, npc) {
    document.getElementById("npc-portrait").src = `${npc.basePath}/${exp}.png`;
    document.getElementById("dialogue-text").innerText = "\"" + reactionObj + "\"";
    document.getElementById("choices-container").innerHTML = "";
    document.getElementById("btn-next").classList.remove("hidden");
}

function renderEnding(ending) {
    document.getElementById("ending-badge").src = ending.badge;
    document.getElementById("ending-title").innerText = ending.title;
    document.getElementById("ending-summary").innerText = ending.summary;
    document.getElementById("ending-reflection").innerHTML = ending.reflection;
    
    // Explicit CAVAB and CITP Breakdown
    const concepts = gameState.c > 50 ? 'power, order, and tradition' : 'freedom and fluid identity';
    const attitudes = gameState.p > 50 ? 'challenged' : 'accepted';
    const values = gameState.a > 50 ? 'self-expression and authenticity' : 'social alignment and group cohesion';
    const beliefs = gameState.c > 50 ? 'assigned by society' : 'flexible and self-constructed';

    document.getElementById("ending-metrics").innerHTML = `
        <strong>FINAL METRICS</strong><br>
        Social Health (Standing): <strong>${getSocialHealth()}%</strong> | Conformity: <strong>${gameState.c}%</strong> | Authenticity: <strong>${gameState.a}%</strong> | Power Resistance: <strong>${gameState.p}%</strong>
        <hr style="margin: 8px 0; border-color: #ddd;">
        <strong>CITP & CAVAB Analysis:</strong><br>
        <em>Concepts:</em> Your choices strongly reflected themes of ${concepts}.<br>
        <em>Attitudes:</em> You ${attitudes} the standard stances people hold towards social hierarchies.<br>
        <em>Values:</em> You proved you considered ${values} to be most worthwhile.<br>
        <em>Beliefs:</em> You acted as if identity is ${beliefs}.
    `;
}

function playAudio() {
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play().catch(() => console.log("Audio autoplay blocked"));
    }
}

function stopAudio() {
    const audio = document.getElementById("bg-music");
    audio.pause();
    audio.currentTime = 0;
}

function toggleMute() {
    const audio = document.getElementById("bg-music");
    const muteBtn = document.getElementById("btn-mute");
    audio.muted = !audio.muted;
    muteBtn.innerText = audio.muted ? "🔇 OFF" : "🔊 ON";
}
