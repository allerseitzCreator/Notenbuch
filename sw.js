/* Notenbuch – Offline-Funktion (Service Worker)
   Speichert die App beim ersten Öffnen, damit sie auch ohne Internet startet.
   Ist eine Verbindung da, wird immer die neueste Version von GitHub geladen.
   Die Noten selbst werden hier NICHT gespeichert – sie liegen im Browser-Speicher der App. */
const CACHE = 'notenbuch-app-v24';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './notenbuch-icon2-180.png', './notenbuch-icon2-512.png', './notenbuch-icon2-1024.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Seite selbst: erst Netz (neueste Version), bei fehlender Verbindung die gespeicherte Version
  if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
    e.respondWith(
      withTimeout(fetch(req.url, {cache:'no-cache', credentials:'same-origin'}), 5000)
        .then(res => {
          if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Symbole & Manifest: aus dem Speicher, im Hintergrund aktualisieren
  e.respondWith(
    caches.match(req).then(cached => {
      const net = fetch(req).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
