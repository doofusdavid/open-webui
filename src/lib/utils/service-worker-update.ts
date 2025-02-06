export function setupServiceWorkerUpdate() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New content is available, prompt user to reload
                  if (confirm('A new version of the app is available. Reload now?')) {
                    newWorker.postMessage('SKIP_WAITING');
                    window.location.reload();
                  }
                }
              }
            });
          }
        });

        // Ensure the Service Worker is activated immediately
        if (registration.waiting) {
          registration.waiting.postMessage('SKIP_WAITING');
        }
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });

    // Reload when a new service worker takes control
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }
}