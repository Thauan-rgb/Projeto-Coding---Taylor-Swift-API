async function getMusica() {
    
        // Mostra loading
        document.getElementById("musica").innerHTML = "<p>Carregando música...</p>";
        
        // Faz a requisição para a nova API
        let response = await fetch("https://taylor-swift-api.vercel.app/api/songs/random");
        let musica = await response.json();
        
        // Exibe a música (nota: esta API não retorna imagem da capa)
        document.getElementById("musica").innerHTML = `
            <h2>${musica.name}</h2>
            <h3>Álbum: ${musica.album}</h3>
            <p>Duração: ${musica.duration}</p>

            <div class="lyrics">
                <h4>Letra:</h4>
                <p>${musica.lyrics}</p>
            </div>
        `;   
}

// Carrega a música quando a página abrir
document.addEventListener("DOMContentLoaded", getMusica);



if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker registrado"))
            .catch(err => console.log("Erro:", err));
    });
}

