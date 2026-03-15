async function getMusica() {
        let response = await fetch("https://itunes.apple.com/search?term=taylor+swift&entity=song&limit=50");
        let data = await response.json();

        
        let musica = data.results[Math.floor(Math.random() * data.results.length)];

        
        document.getElementById("musica").innerHTML = `
            <h2>${musica.trackName}</h2>
            <h3>Álbum: ${musica.collectionName}</h3>
            <img src="${musica.artworkUrl100}" alt="Capa do álbum">
            <p>Lançamento: ${new Date(musica.releaseDate).getFullYear()}</p>
        `;
    
}

window.onload = function() {
    getMusica();
};

