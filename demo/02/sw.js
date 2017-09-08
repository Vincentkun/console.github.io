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