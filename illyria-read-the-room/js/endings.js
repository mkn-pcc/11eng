function calculateEnding(c, a, p) {
    for (let ending of endingsData) {
        if (ending.condition(c, a, p)) {
            return ending;
        }
    }
    return endingsData[endingsData.length - 1]; // Safe fallback
}
