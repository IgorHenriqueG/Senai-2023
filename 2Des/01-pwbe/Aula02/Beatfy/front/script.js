const progress = document.querySelector('.progress');
const progressBar = document.querySelector('#duration');
const progressFilled = document.querySelector('.progress-filled-inner');

const volume = document.querySelector('.volume');

const audio = document.querySelector('audio');

const activePlaylist = document.querySelector('.main-playlist-songs');

setTimeout(() => {
    activePlaylist.querySelectorAll('.song').forEach(song => {
        const songId = song.querySelector('.song-id').innerHTML;
        song.addEventListener('mouseover', () => {
            song.querySelector('.song-id').innerHTML = '<i class="fas fa-play"></i>';
        })

        song.addEventListener('mouseout', () => {
            song.querySelector('.song-id').innerHTML = songId;
        })
    })
}, 100)


var volumeValue = 0;

// Controls

function togglePlay(e) {
    if (audio.paused) {
        audio.play();
        e.querySelector('i').classList.remove('fa-play');
        e.querySelector('i').classList.add('fa-pause');
    } else {
        audio.pause();
        e.querySelector('i').classList.remove('fa-pause');
        e.querySelector('i').classList.add('fa-play');
    }

    const minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    if (seconds < 10) {  
        seconds = `0${seconds}`
    }
    document.querySelector('#duration-time').textContent = `${minutes}:${seconds}`
}

function toggleRepeat(e) {
    if (audio.loop) {
        audio.loop = false;
        e.querySelector('i').classList.remove('active');
    } else {
        audio.loop = true;
        e.querySelector('i').classList.add('active');
    }
}

function prevSong() {
    audio.currentTime = 0;
}

function nextSong() {
    audio.currentTime = audio.duration;
}

// Volume

volume.querySelector('input').addEventListener('input', (e) => {
    const volumeValue = e.target.value / 100;
    audio.volume = volumeValue;

    volume.querySelector('.volume-range').style.width = `${volumeValue * 90}%`;

    if (volumeValue === 0) {
        volume.querySelector('i').classList.remove('fa-volume-up');
        volume.querySelector('i').classList.add('fa-volume-off');
    }

    if (volumeValue > 0 && volumeValue < 0.8) {
        volume.querySelector('i').classList.remove('fa-volume-off');
        volume.querySelector('i').classList.remove('fa-volume-up');
        volume.querySelector('i').classList.add('fa-volume-down');
    }

    if (volumeValue > 0.8) {
        volume.querySelector('i').classList.remove('fa-volume-down');
        volume.querySelector('i').classList.add('fa-volume-up');
    }  
})

volume.querySelector('i').addEventListener('click', () => {
    if(volume.querySelector('input').value != 0) {
        volumeValue = volume.querySelector('input').value;
    }

    if(audio.muted) {
        audio.muted = false;
        volume.querySelector('input').value = volumeValue
        volume.querySelector('.volume-range').style.width = `${volumeValue}%`;
        volume.querySelector('i').classList.remove('fa-volume-off');
        volume.querySelector('i').classList.add('fa-volume-down');
    }else {
        audio.muted = true;
        volume.querySelector('input').value = 0;
        volume.querySelector('.volume-range').style.width = `0%`;
        volume.querySelector('i').classList.remove('fa-volume-up');
        volume.querySelector('i').classList.remove('fa-volume-down');
        volume.querySelector('i').classList.add('fa-volume-off');
    }
})

// Progress

progress.addEventListener('input', (e) => {
    const progressValue = e.target.value;
    audio.currentTime = (progressValue * audio.duration) / 100;

    
    progressFilled.style.width = `${progressValue}%`;
})

audio.onloadedmetadata = () => {
    const minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    if (seconds < 10) {  
        seconds = `0${seconds}`
    }
    document.querySelector('#duration-time').textContent = `${minutes}:${seconds}`
}

audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressValue;
    progressFilled.style.width = `${progressValue}%`;
    const minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if (seconds < 10) {  
        seconds = `0${seconds}`
    }
    document.querySelector('#progress-time').textContent = `${minutes}:${seconds}`
})

audio.addEventListener('ended', () => {
    if(!audio.loop) {
        audio.pause();
        document.querySelector('#play').querySelector('i').classList.remove('fa-pause');
        document.querySelector('#play').querySelector('i').classList.add('fa-play');
    }
})
