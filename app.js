/**
 * YE TRACKER - Album-Centric Architecture
 */

// ==========================================
// 🎵 ALBUM DATABASE (Nested Structure)
// ==========================================
const ALBUMS = [
    {
        id: 'graduation',
        title: 'Graduation',
        year: '2007',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/grad.png?raw=true',
        tracks: [
            { id: 'grad-1', title: "Good Morning", duration: "3:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-01.mp3" },
            { id: 'grad-2', title: "Champion", duration: "2:48", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-02.mp3" },
            { id: 'grad-3', title: "Stronger", duration: "5:12", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-03.mp3" },
            { id: 'grad-4', title: "I Wonder", duration: "4:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-04.mp3" },
            { id: 'grad-5', title: "Good Life", duration: "3:27", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-05.mp3" },
            { id: 'grad-6', title: "Can't Tell Me Nothing", duration: "4:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-06.mp3" },
            { id: 'grad-7', title: "Barry Bonds", duration: "3:24", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-07.mp3" },
            { id: 'grad-8', title: "Drunk and Hot Girls", duration: "5:13", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-08.mp3" },
            { id: 'grad-9', title: "Flashing Lights", duration: "3:57", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-09.mp3" },
            { id: 'grad-10', title: "Everything I Am", duration: "3:47", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-10.mp3" },
            { id: 'grad-11', title: "The Glory", duration: "3:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-11.mp3" },
            { id: 'grad-12', title: "Homecoming", duration: "3:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-12.mp3" },
            { id: 'grad-13', title: "Big Brother", duration: "4:47", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-13.mp3" },
            { id: 'grad-14', title: "Good Night", duration: "3:06", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-14.mp3" }
            { id: 'grad-15', title: "Bittersweet Poetry", duration: "4:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/graduation/GRADUATION-15.mp3" }
        ]
    },
    {
        id: '808s',
        title: '808s & Heartbreak',
        year: '2008',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/808s.png?raw=true',
        tracks: [
            { id: '808-1', title: "Say You Will", duration: "6:15", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-01.mp3" },
            { id: '808-2', title: "Welcome To Heartbreak", duration: "4:23", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-02.mp3" },
            { id: '808-3', title: "Heartless", duration: "3:31", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-03.mp3" },
            { id: '808-4', title: "Amazing", duration: "3:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-04.mp3" },
            { id: '808-5', title: "Love Lockdown", duration: "4:30", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-05.mp3" },
            { id: '808-6', title: "Paranoid", duration: "4:37", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-06.mp3" },
            { id: '808-7', title: "RoboCop", duration: "4:34", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-07.mp3" },
            { id: '808-8', title: "Street Lights", duration: "3:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-08.mp3" },
            { id: '808-9', title: "Bad News", duration: "3:59", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-09.mp3" },
            { id: '808-10', title: "See You In My Nightmares", duration: "4:18", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-10.mp3" },
            { id: '808-11', title: "Coldest Winter", duration: "2:45", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-11.mp3" },
            { id: '808-12', title: "Pinocchio Story", duration: "6:04", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/808s/808-12.mp3" }
        ]
    },
    {
        id: 'mbdtf',
        title: 'My Beautiful Dark Twisted Fantasy',
        year: '2010',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/mbdtf.jpg?raw=true',
        tracks: [
        { id: 'mbdtf-1', title: "Dark Fantasy", duration: "4:41", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-01.mp3" },
        { id: 'mbdtf-2', title: "Gorgeous", duration: "5:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-02.mp3" },
        { id: 'mbdtf-3', title: "POWER", duration: "4:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-03.mp3" },
        { id: 'mbdtf-4', title: "All Of The Lights (Interlude)", duration: "1:02", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-04.mp3" },
        { id: 'mbdtf-5', title: "All Of The Lights", duration: "5:00", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-05.mp3" },
        { id: 'mbdtf-6', title: "Monster", duration: "6:19", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-06.mp3" },
        { id: 'mbdtf-7', title: "So Appalled", duration: "6:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-07.mp3" },
        { id: 'mbdtf-8', title: "Devil In A New Dress", duration: "5:52", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-08.mp3" },
        { id: 'mbdtf-9', title: "Runaway", duration: "9:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-09.mp3" },
        { id: 'mbdtf-10', title: "Hell Of A Life", duration: "5:28", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-10.mp3" },
        { id: 'mbdtf-11', title: "Blame Game", duration: "7:50", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-11.mp3" },
        { id: 'mbdtf-12', title: "Lost In The World", duration: "4:17", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-12.mp3" },    
        { id: 'mbdtf-13', title: "Who Will Survive In America", duration: "1:38", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/mbdtf/MBDTF-13.mp3" },    
        ]
    },
    {
        id: 'yeezus',
        title: 'Yeezus',
        year: '2013',
        status: 'released',
        cover: 'https://github.com/silv1e-baby/ye-tracker/blob/main/assets/covers/yeezus.jpg?raw=true',
        tracks: [
            { id: 'yeezus-1', title: "On Sight", duration: "2:36", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-01.mp3" },
            { id: 'yeezus-2', title: "Black Skinhead", duration: "3:08", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-02.mp3" },
            { id: 'yeezus-3', title: "I Am A God", duration: "3:51", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-03.mp3" },
            { id: 'yeezus-4', title: "New Slaves", duration: "4:16", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-04.mp3" },
            { id: 'yeezus-5', title: "Hold My Liquor", duration: "5:26", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-05.mp3" },
            { id: 'yeezus-6', title: "I'm In It", duration: "3:54", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-06.mp3" },
            { id: 'yeezus-7', title: "Blood On The Leaves", duration: "4:09", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-07.mp3" },
            { id: 'yeezus-8', title: "Guilt Trip", duration: "4:03", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-08.mp3" },
            { id: 'yeezus-9', title: "Send It Up", duration: "2:58", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-09.mp3" },
            { id: 'yeezus-10', title: "Bound 2", duration: "3:49", src: "https://github.com/silv1e-baby/ye-tracker/raw/refs/heads/main/assets/albums/yeezus/YEEZUS-10.mp3" }
        ]
    },
    {
        id: 'yandhi',
        title: 'YANDHI',
        year: 'Unreleased',
        status: 'unreleased',
        cover: 'https://placehold.co/400x400/ff3b30/FFF?text=YANDHI',
        tracks: [
            { id: 'yan-1', title: "Wolves In The Streets", duration: "3:45", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-1.mp3" },
            { id: 'yan-2', title: "Brothers (OG)", duration: "4:20", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-2.mp3" },
            { id: 'yan-3', title: "New Body", duration: "3:30", src: "https://www.soundhelix.com/data/mp3/SoundHelix-Song-3.mp3" }
        ]
    }
];

// ==========================================
// ⚙️ STATE
// ==========================================
let currentView = 'albums'; // 'albums' | 'tracklist'
let activeFilter = 'all';
let selectedAlbum = null;
let currentTrackIndex = 0;
let isPlaying = false;
let currentPlaylist = []; // Flat array of whatever is currently playing

// DOM Refs
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const trackListEl = document.getElementById('trackList');
const currentTitleEl = document.getElementById('currentTitle');
const currentArtistEl = document.getElementById('currentArtist');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// ==========================================
// 🎨 RENDERERS
// ==========================================

/** Renders the album grid */
function renderAlbumGrid() {
    currentView = 'albums';
    selectedAlbum = null;
    trackListEl.innerHTML = '';

    const filtered = activeFilter === 'all'
        ? ALBUMS
        : ALBUMS.filter(a => a.status === activeFilter);

    if (filtered.length === 0) {
        trackListEl.innerHTML = '<p style="color:var(--muted);padding:2rem;">No albums found in this category.</p>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'album-grid';

    filtered.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <div class="album-cover">
                <img src="${album.cover}" alt="${album.title}">
            </div>
            <div class="album-meta">
                <h4>${album.title}</h4>
                <p>${album.year} • ${album.tracks.length} Tracks</p>
            </div>
        `;
        card.addEventListener('click', () => openAlbum(album));
        grid.appendChild(card);
    });

    trackListEl.appendChild(grid);
}

/** Renders tracklist for a specific album */
function renderTracklist(album) {
    currentView = 'tracklist';
    selectedAlbum = album;
    currentPlaylist = album.tracks;
    trackListEl.innerHTML = '';

    // Back Button Header
    const backHeader = document.createElement('div');
    backHeader.className = 'tracklist-header';
    backHeader.innerHTML = `
        <button class="back-btn" id="backToAlbums">← BACK TO ALBUMS</button>
        <div class="tracklist-album-info">
            <h2>${album.title}</h2>
            <p>${album.year} • ${album.status.toUpperCase()}</p>
        </div>
    `;
    trackListEl.appendChild(backHeader);

    // Bind back button after rendering
    document.getElementById('backToAlbums').addEventListener('click', renderAlbumGrid);

    // Track Items
    album.tracks.forEach((track, index) => {
        const div = document.createElement('div');
        const isCurrent = currentPlaylist === album.tracks && index === currentTrackIndex && isPlaying;
        div.className = `track-item ${isCurrent ? 'playing' : ''}`;
        div.dataset.index = index;

        div.innerHTML = `
            <span class="track-num">${String(index + 1).padStart(2, '0')}</span>
            <div class="track-info">
                <h4>${track.title}</h4>
                <p>${album.title}</p>
            </div>
            <span class="track-duration">${track.duration}</span>
        `;

        div.addEventListener('click', () => playSpecificTrack(index));
        trackListEl.appendChild(div);
    });
}

function openAlbum(album) {
    renderTracklist(album);
}

// ==========================================
// 🔍 SIDEBAR FILTERING
// ==========================================
function setupFilters() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            // Always go back to album grid when changing filters
            renderAlbumGrid();
        });
    });
}

// ==========================================
// ▶️ AUDIO ENGINE
// ==========================================
function loadTrack(index) {
    if (currentPlaylist.length === 0) return;
    currentTrackIndex = index;
    const track = currentPlaylist[index];
    const albumName = selectedAlbum ? selectedAlbum.title : 'YE ARCHIVE';

    audio.src = track.src;
    currentTitleEl.innerText = track.title;
    currentArtistEl.innerText = `Ye • ${albumName}`;

    // Re-render tracklist to update playing highlight
    if (currentView === 'tracklist') {
        renderTracklist(selectedAlbum);
    }
}

function togglePlay() {
    if (currentPlaylist.length === 0) return;
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = '▶';
    } else {
        audio.play().catch(err => console.warn("Playback blocked:", err));
        playPauseBtn.innerText = '⏸';
    }
    isPlaying = !isPlaying;
}

function playSpecificTrack(index) {
    loadTrack(index);
    isPlaying = true;
    audio.play().catch(err => console.warn("Playback blocked:", err));
    playPauseBtn.innerText = '⏸';
}

function nextTrack() {
    if (currentPlaylist.length === 0) return;
    playSpecificTrack((currentTrackIndex + 1) % currentPlaylist.length);
}

function prevTrack() {
    if (currentPlaylist.length === 0) return;
    playSpecificTrack((currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==========================================
// 🎛️ AUDIO EVENTS
// ==========================================
function setupAudioEvents() {
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress || 0;
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => nextTrack());

    seekBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });

    playPauseBtn.addEventListener('click', togglePlay);
    document.getElementById('nextBtn').addEventListener('click', nextTrack);
    document.getElementById('prevBtn').addEventListener('click', prevTrack);
}

// ==========================================
// 🚀 INIT
// ==========================================
function init() {
    setupFilters();
    setupAudioEvents();
    renderAlbumGrid(); // Start at album grid
}

document.addEventListener('DOMContentLoaded', init);
