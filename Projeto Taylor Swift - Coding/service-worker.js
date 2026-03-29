const CACHE_NAME = "taylor-swift-songs-v2";

const urlsToCache = [
  "/",
  "/index.html",
  "/saida.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/img/taylor_icon48.png",
  "/img/taylor_icon72.png",
  "/img/taylor_icon96.png",
  "/img/taylor_icon144.png",
  "/img/taylor_icon192.png",
  "/img/taylor_icon512.png",
  "/img/banner.jpeg",
  "/img/2.jpeg"
];

// INSTALAÇÃO (salva arquivos no cache)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache criado");
      return cache.addAll(urlsToCache);
    })
  );
});

// ATIVAÇÃO (limpa cache antigo)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// FETCH (responde com cache ou internet)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});