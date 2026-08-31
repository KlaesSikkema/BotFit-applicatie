var CACHE='botfit-v29';
var ASSETS=['./','./index.html','./manifest.webmanifest','./supabase.js','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){if(k!==CACHE)return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r||fetch(e.request).then(function(resp){
        var copy=resp.clone();
        caches.open(CACHE).then(function(c){try{c.put(e.request,copy);}catch(err){}});
        return resp;
      }).catch(function(){return caches.match('./index.html');});
    })
  );
});
