self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('cache-v1').then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request);
      });
    })
  );
});
