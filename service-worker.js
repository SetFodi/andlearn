const CACHE_NAME = 'andlearn-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/tailwind.min.css',
  '/main.js',
  '/assets/icons/javascript.svg',
  '/assets/icons/typescript.svg',
  '/assets/icons/react.svg',
  '/assets/icons/python.svg',
  '/manifest.json',
  // tutorial pages
  '/javascript.html',
  '/typescript.html',
  '/react.html',
  '/python.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchRes => {
        return caches.open(CACHE_NAME).then(cache => {
          if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
            cache.put(event.request, fetchRes.clone());
          }
          return fetchRes;
        });
      }).catch(() => caches.match('/index.html'));
    })
  );
}); 