self.addEventListener('install', function(event) {
	event.waitUntil(
	  caches.open('v2').then(function(cache) {
		return cache.addAll([
		  '/sw/demo/02/',
		  '/sw/demo/02/index.html',
		  '/sw/demo/02/style.css',
		  '/sw/demo/02/main.js'
		]);
	  })
	);
  });


  self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
	  // caches.match() always resolves
	  // but in case of success response will have value
	  if (response !== undefined) {
		return response;
	  } else {
		return fetch(event.request).then(function (response) {
		  // response may be used only once
		  // we need to save clone to put one copy in cache
		  // and serve second one
		  let responseClone = response.clone();
		  
		  caches.open('v1').then(function (cache) {
			cache.put(event.request, responseClone);
		  });
		  return response;
		}).catch(function () {
		//   return caches.match('/sw/gallery/myLittleVader.jpg');
		});
	  }
	}));
  });