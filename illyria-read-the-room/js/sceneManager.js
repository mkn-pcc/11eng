function selectAvatar(avatar) {
    gameState.avatar = avatar;
    stopAudio(); // Music stops during gameplay
    showScreen("screen-game");
    updateHUD();
    loadScene();
}

function loadScene() {
    if (gameState.sceneIndex >= scenesData.length) {
        triggerEnding();
        return;
    }
    const scene = scenesData[gameState.sceneIndex];
    renderScene(scene);
}

function handleChoice(choiceObj, npc) {
    // Apply hidden variable effects
    gameState.c = clampStat(gameState.c + choiceObj.effects.c);
    gameState.a = clampStat(gameState.a + choiceObj.effects.a);
    gameState.p = clampStat(gameState.p + choiceObj.effects.p);
    
    updateHUD();

    // Get reaction based on worldRead (male/female avatar)
    const reaction = choiceObj.reaction[gameState.avatar.worldRead];
    renderReaction(reaction, npc);
}

function advanceScene() {
    gameState.sceneIndex++;
    loadScene();
}

function triggerEnding() {
    const ending = calculateEnding(gameState.c, gameState.a, gameState.p);
    renderEnding(ending);
    showScreen("screen-ending");
    playAudio(); // Music resumes on ending screen
}
