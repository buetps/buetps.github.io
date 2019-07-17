// This is the service worker with the Cache-first network


// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
    } else {
      // Register the service worker
      navigator.serviceWorker
        .register("service-worker.js", {
          scope: "./"
        })
        .then(function (reg) {
          console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
        });
    }
  }