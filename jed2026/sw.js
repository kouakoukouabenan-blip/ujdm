const CACHE='jed2026-app-v23';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./cadre-jed2026.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  if(u.origin!==location.origin) return;              /* Drive et polices : reseau direct */
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(CACHE).then(k=>k.put('./index.html',c));return x})
      .catch(()=>caches.match('./index.html'))); return;
  }
  e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{
    if(x&&x.status===200&&x.type==='basic'){const c=x.clone();caches.open(CACHE).then(k=>k.put(r,c));}
    return x;}).catch(()=>h)));
});
