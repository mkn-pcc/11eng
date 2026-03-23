function clampStat(val) {
    return Math.max(gameConfig.minStat, Math.min(gameConfig.maxStat, val));
}

function getSocialHealth() {
    // Social Health (Standing) drops if you resist (p) or assert raw authenticity (a), 
    // and rises when you conform (c) or hide your real self to appease the school.
    const conformityScore = gameState.c;
    const performanceScore = 100 - gameState.a; // High authenticity hurts social standing here
    const submissionScore = 100 - gameState.p;  // High power resistance hurts social standing

    return Math.round((conformityScore + performanceScore + submissionScore) / 3);
}
