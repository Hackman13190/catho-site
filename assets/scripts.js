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







function sommaire() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'block';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function liste() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function listeParoles() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'block';
    document.getElementById('audio').style.display = 'none';
}

function listeAudio() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'block';
}

function paroles() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'block';
    document.getElementById('songListAudio').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}

function audio() {
    // Afficher la liste des chansons et masquer le contenu
    document.getElementById('songList').style.display = 'none';
    document.getElementById('songListParoles').style.display = 'none';
    document.getElementById('songListAudio').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.getElementById('paroles').style.display = 'none';
    document.getElementById('audio').style.display = 'none';
}



function loadContent(songName) {
    const songTitleElement = document.getElementById('songTitle');
    const lyricsElement = document.getElementById('lyrics');
    const audioPlayer = document.getElementById('audioPlayer');

    // Afficher le titre de la chanson
    songTitleElement.textContent = songName + ":"; // elnever ou laisserrrrrrrrrrrrrrrrrrrrrrr

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
    const songTitleElement = document.getElementById('songTitleParoles');
    const lyricsElement = document.getElementById('lyricsParoles');

    // Afficher le titre de la chanson
    songTitleElement.textContent = songName + ":"; // elnever ou laisserrrrrrrrrrrrrrrrrrrrrrr

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
    const songTitleElement = document.getElementById('songTitleAudio');
    const audioPlayer = document.getElementById('audioPlayerAudio');

    // Afficher le titre de la chanson
    songTitleElement.textContent = songName + ":"; // elnever ou laisserrrrrrrrrrrrrrrrrrrrrrr

    // Charger l'audio
    audioPlayer.src = `./assets/audio/${songName}.mp3`;
}
