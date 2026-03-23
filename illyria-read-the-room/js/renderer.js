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
    document.getElementById("popup-text").innerText = text;
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
    
    const npc = charactersData[sceneData.npcId];
    const portrait = document.getElementById("npc-portrait");
    portrait.src = `${npc.basePath}/neutral.png`;
    portrait.classList.remove("hidden");

    document.getElementById("speaker-nameplate").classList.remove("hidden");
    document.getElementById("speaker-name").innerText = npc.name;
    document.getElementById("dialogue-text").innerText = sceneData.narrative + "\n\n\"" + sceneData.dialogue + "\"";

    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
    document.getElementById("btn-next").classList.add("hidden");

    sceneData.choices.forEach(choiceId => {
        const choice = choicesData[choiceId];
        const btn = document.createElement("button");
        btn.className = "choice-text-btn";
        btn.innerText = choice.text;
        btn.addEventListener("click", () => handleChoice(choice, npc));
        choicesContainer.appendChild(btn);
    });
}

function renderReaction(reactionObj, npc) {
    document.getElementById("npc-portrait").src = `${npc.basePath}/${reactionObj.exp}.png`;
    document.getElementById("dialogue-text").innerText = "\"" + reactionObj.text + "\"";
    document.getElementById("choices-container").innerHTML = "";
    document.getElementById("btn-next").classList.remove("hidden");
}

function renderEnding(ending) {
    document.getElementById("ending-badge").src = ending.badge;
    document.getElementById("ending-title").innerText = ending.title;
    document.getElementById("ending-summary").innerText = ending.summary;
    document.getElementById("ending-reflection").innerHTML = ending.reflection;
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
