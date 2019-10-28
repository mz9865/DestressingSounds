function playAudio() {
    const audio = document.getElementById('audio');
    audio.volume = 0.1;
    audio.play();
}

function pauseAudio() {
    const audio = document.getElementById('audio');
    audio.pause();

    const playButton = document.getElementById('play-button');
    playButton.innerHTML = "Resume"
}