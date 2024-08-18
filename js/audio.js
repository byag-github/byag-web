const audio = document.getElementById("myAudio");
const audioTime = document.getElementById("audioTime");
const audioTitle = document.getElementById("audioTitle");

const playlist = [
    { src: "audio/audiorock.mp3", title: "Black Parade" },
    { src: "audio/audiorock2.mp3", title: "Macy Day Parade" },
    { src: "audio/audiorock3.mp3", title: "Back In Black" }
];
let currentTrack = 0;

const nextTrack = () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack].src;
    audio.play();
    updateTitle();
};

const updateTitle = () => audioTitle.textContent = playlist[currentTrack].title;
const updateTime = () => audioTime.textContent =
    `${Math.floor(audio.currentTime / 60)}:${String(Math.floor(audio.currentTime % 60)).padStart(2, '0')}`;

audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('ended', nextTrack);
window.addEventListener('load', updateTitle);