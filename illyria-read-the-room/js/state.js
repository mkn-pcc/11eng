let gameState = {
    avatar: null,
    sceneIndex: 0,
    nodeIndex: 0,
    c: gameConfig.startStats.c,
    a: gameConfig.startStats.a,
    p: gameConfig.startStats.p
};

function resetState() {
    gameState = {
        avatar: null,
        sceneIndex: 0,
        nodeIndex: 0,
        c: gameConfig.startStats.c,
        a: gameConfig.startStats.a,
        p: gameConfig.startStats.p
    };
}
