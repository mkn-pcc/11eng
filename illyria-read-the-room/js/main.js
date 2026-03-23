document.addEventListener("DOMContentLoaded", () => {
    // UI binding
    document.getElementById("btn-start").addEventListener("click", () => {
        playAudio();
        showScreen("screen-avatar");
        renderAvatars();
    });

    document.getElementById("btn-how-to").addEventListener("click", () => {
        playAudio();
        const content = document.getElementById("how-to-template").innerHTML;
        showPopup(content);
    });

    const creditsContent = document.getElementById("credits-template").innerHTML;
    document.getElementById("btn-credits-title").addEventListener("click", () => {
        playAudio();
        showPopup(creditsContent);
    });
    
    document.getElementById("btn-credits-ending").addEventListener("click", () => {
        showPopup(creditsContent);
    });

    document.getElementById("btn-close-popup").addEventListener("click", hidePopup);

    document.getElementById("btn-next").addEventListener("click", () => {
        advanceNode();
    });

    document.getElementById("btn-replay").addEventListener("click", () => {
        stopAudio(); // Ensures ending music stops
        resetState();
        showScreen("screen-avatar");
        renderAvatars();
    });

    // Mute Button listener
    document.getElementById("btn-mute").addEventListener("click", toggleMute);

    // Resize handling for 1280x720 scaling
    window.addEventListener("resize", scaleContainer);
    scaleContainer();
});
