const audio = document.getElementById("myAudio");
const audioTime = document.getElementById("audioTime");
const audioTitle = document.getElementById("audioTitle");

const playlist = [
    { src: "audio/audiorock.mp3", title: "Black Parade" },
    { src: "audio/audiorock2.mp3", title: "Macy Day Parade" }
];
let currentTrack = 0;

// Function to load the last track and position
const loadAudioState = () => {
    const savedTrack = localStorage.getItem('currentTrack');
    const savedTime = localStorage.getItem('currentTime');

    if (savedTrack !== null) {
        currentTrack = parseInt(savedTrack, 10);
        audio.src = playlist[currentTrack].src;
        updateTitle();
    }

    if (savedTime !== null) {
        audio.currentTime = parseFloat(savedTime);
    }
};

const saveAudioState = () => {
    localStorage.setItem('currentTrack', currentTrack);
    localStorage.setItem('currentTime', audio.currentTime);
};

const nextTrack = () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack].src;
    audio.play();
    updateTitle();
    saveAudioState();
};

const updateTitle = () => audioTitle.textContent = playlist[currentTrack].title;

const updateTime = () => {
    audioTime.textContent =
        `${Math.floor(audio.currentTime / 60)}:${String(Math.floor(audio.currentTime % 60)).padStart(2, '0')}`;
    saveAudioState(); // Save the current time continuously as the audio plays
};

window.addEventListener('load', () => {
    loadAudioState();  // Load the saved state on page load
    audio.muted = false;
    audio.play();
});

audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('ended', nextTrack);