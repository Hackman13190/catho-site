// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownMenu.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
    // Cacher le menu déroulant lorsque l'on clique ailleurs sur la page
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none';
    });
    // Empêcher la fermeture du menu déroulant lorsque le bouton est cliqué
    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Initialiser l'affichage
document.addEventListener('DOMContentLoaded', function() {
    sommaire(); // Afficher la liste des chansons par défaut
});


function stopAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Réinitialiser l'audio à son début
    }

    const audioPlayerAudio = document.getElementById('audioPlayerAudio');
    if (audioPlayerAudio) {
        audioPlayerAudio.pause();
        audioPlayerAudio.currentTime = 0; // Réinitialiser l'audio à son début
    }
}




function sommaire() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('red_tests').classList.remove('red');
    document.getElementById('red_tests').classList.add('white');
    document.getElementById('green_sommaire').classList.remove('white');
    document.getElementById('green_sommaire').classList.add('green');
    document.getElementById('songList').style.display = 'block';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function liste() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function listeParoles() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'block';
    document.getElementById('audio').style.display = 'none';
}

function listeAudio() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'block';
}

function paroles() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('green_sommaire').classList.remove('green');
    document.getElementById('green_sommaire').classList.add('white');
    document.getElementById('red_tests').classList.remove('white');
    document.getElementById('red_tests').classList.add('red');
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'block';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function audio() {
    stopAudio();
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('green_sommaire').classList.remove('green');
    document.getElementById('green_sommaire').classList.add('white');
    document.getElementById('red_tests').classList.remove('white');
    document.getElementById('red_tests').classList.add('red');
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}



function loadContent(songName) {
    stopAudio();
    const songTitleElement = document.getElementById('songTitle');
    const lyricsElement = document.getElementById('lyrics');
    const audioPlayer = document.getElementById('audioPlayer');

    // Afficher le titre de la chanson
    const formattedSongName = songName.replace(/-/g, ' ');
    songTitleElement.textContent = formattedSongName + ":"; 

    // Charger les paroles
    fetch(`./assets/lyrics/${songName}.txt`)
        .then(response => response.text())
        .then(text => {
            lyricsElement.innerHTML = text.replace(/\n/g, '<br>'); // Remplacer les sauts de ligne par des balises <br>
        })
        .catch(error => {
            lyricsElement.textContent = 'Les paroles ne sont pas disponibles.';
            console.error('Erreur lors du chargement des paroles:', error);
        });

    // Charger l'audio
    audioPlayer.src = `./assets/audio/${songName}.mp3`;
}

function loadContentParoles(songName) {
    stopAudio();
    const songTitleElement = document.getElementById('songTitleParoles');
    const lyricsElement = document.getElementById('lyricsParoles');

    // Afficher le titre de la chanson
    const formattedSongName = songName.replace(/-/g, ' ');
    songTitleElement.textContent = formattedSongName + ":"; 

    // Charger les paroles
    fetch(`./assets/lyrics/${songName}.txt`)
        .then(response => response.text())
        .then(text => {
            lyricsElement.innerHTML = text.replace(/\n/g, '<br>'); // Remplacer les sauts de ligne par des balises <br>
        })
        .catch(error => {
            lyricsElement.textContent = 'Les paroles ne sont pas disponibles.';
            console.error('Erreur lors du chargement des paroles:', error);
        });
}

function loadContentAudio(songName) {
    stopAudio();
    const songTitleElement = document.getElementById('songTitleAudio');
    const audioPlayer = document.getElementById('audioPlayerAudio');

    // Afficher le titre de la chanson
    const formattedSongName = songName.replace(/-/g, ' ');
    songTitleElement.textContent = formattedSongName + ":"; 

    // Charger l'audio
    audioPlayer.src = `./assets/audio/${songName}.mp3`;
}
