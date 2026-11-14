var C='ledger-v1';
var A=['./','index.html','manifest.webmanifest','firebase-config.js','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var r=e.request;if(r.method!=='GET')return;var u=new URL(r.url);
  if(!(u.origin===location.origin||u.hostname==='www.gstatic.com'))return;
  e.respondWith(caches.match(r).then(function(h){
    var f=fetch(r).then(function(n){if(n&&(n.ok||n.type==='opaque')){var cl=n.clone();caches.open(C).then(function(c){c.put(r,cl)})}return n}).catch(function(){return h});
    return h||f}))});
