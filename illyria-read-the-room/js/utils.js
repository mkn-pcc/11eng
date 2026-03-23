function clampStat(val) {
    return Math.max(gameConfig.minStat, Math.min(gameConfig.maxStat, val));
}

function getSocialHealth() {
    return Math.round((gameState.c + gameState.a + gameState.p) / 3);
}
