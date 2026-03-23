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
    const reactionText = choiceObj.reaction[gameState.avatar.worldRead];
    renderReaction(reactionText, choiceObj.exp, npc);
}

function advanceNode() {
    const currentScene = scenesData[gameState.sceneIndex];
    gameState.nodeIndex++;
    
    if (gameState.nodeIndex >= currentScene.nodes.length) {
        gameState.sceneIndex++;
        gameState.nodeIndex = 0;
    }
    loadScene();
}

function triggerEnding() {
    const ending = calculateEnding(gameState.c, gameState.a, gameState.p);
    renderEnding(ending);
    showScreen("screen-ending");
    playAudio(); // Music resumes on ending screen
}
