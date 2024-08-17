document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Track list
    const tracks = [
        { title: "Track 1", artist: "Artist 1", src: "track1.mp3" },
        { title: "Track 2", artist: "Artist 2", src: "track2.mp3" },
        { title: "Track 3", artist: "Artist 3", src: "track3.mp3" }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        audio.src = tracks[index].src;
        document.getElementById('track-title').textContent = tracks[index].title;
        document.getElementById('artist-name').textContent = tracks[index].artist;
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "Pause";
        } else {
            audio.pause();
            playPauseBtn.textContent = "Play";
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        audio.play();
    }

    // Event listeners
    playPauseBtn.addEventListener('click', playPause);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);

    // Load the initial track
    loadTrack(currentTrackIndex);
});
