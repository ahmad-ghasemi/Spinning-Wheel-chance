const CACHE_NAME = 'gardoneh-shans-v1.0.0';
const STATIC_CACHE_NAME = 'gardoneh-shans-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'gardoneh-shans-dynamic-v1.0.0';

// Files to cache for offline functionality
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/browserconfig.xml',
    'https://fonts.googleapis.com/css2?family=Vazir:wght@400;700&family=Amiri:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('Service Worker: Static assets cached');
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('Service Worker: Cache failed', err);
            })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE_NAME && 
                            cacheName !== DYNAMIC_CACHE_NAME) {
                            console.log('Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip Chrome extension requests
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cacheResponse => {
                // Return cached version if available
                if (cacheResponse) {
                    return cacheResponse;
                }

                // If not in cache, fetch from network
                return fetch(event.request)
                    .then(fetchResponse => {
                        // Check if valid response
                        if (!fetchResponse || fetchResponse.status !== 200 || 
                            fetchResponse.type !== 'basic') {
                            return fetchResponse;
                        }

                        // Clone response for caching
                        const responseClone = fetchResponse.clone();

                        // Cache dynamic content
                        caches.open(DYNAMIC_CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseClone);
                            });

                        return fetchResponse;
                    })
                    .catch(() => {
                        // Offline fallback
                        if (event.request.destination === 'document') {
                            return caches.match('/index.html');
                        }
                        
                        // For images, return a placeholder
                        if (event.request.destination === 'image') {
                            return new Response(
                                '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#667eea"/><text x="100" y="100" text-anchor="middle" fill="white" font-size="16">آفلاین</text></svg>',
                                { headers: { 'Content-Type': 'image/svg+xml' } }
                            );
                        }
                    });
            })
    );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
    console.log('Service Worker: Background sync triggered');
    if (event.tag === 'wheel-spin') {
        event.waitUntil(
            // Handle offline wheel spins when connection is restored
            handleOfflineSpins()
        );
    }
});

// Handle offline spins
async function handleOfflineSpins() {
    try {
        // Get offline spins from IndexedDB or localStorage
        const offlineSpins = JSON.parse(localStorage.getItem('offline-spins') || '[]');
        
        if (offlineSpins.length > 0) {
            console.log('Service Worker: Processing offline spins', offlineSpins);
            // Process offline spins here if needed
            localStorage.removeItem('offline-spins');
        }
    } catch (error) {
        console.error('Service Worker: Error handling offline spins', error);
    }
}

// Push notifications
self.addEventListener('push', event => {
    console.log('Service Worker: Push notification received');
    
    const options = {
        body: 'گردونه شانس آماده استفاده است!',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0iIzY2N2VlYSIvPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjAwIiBmaWxsPSIjZmY2YjZiIi8+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIxMDAiIGZpbGw9IiM0OWNkYzQiLz48dGV4dCB4PSIyNTYiIHk9IjI5MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0OCIgZmlsbD0id2hpdGUiPtqv2LHYr9mI2YbZhyDYtNin2YbYszwvdGV4dD48L3N2Zz4=',
        badge: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiI+PHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiBmaWxsPSIjNjY3ZWVhIi8+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMjQiIGZpbGw9IiNmZjZiNmIiLz48L3N2Zz4=',
        tag: 'wheel-notification',
        renotify: true,
        vibrate: [200, 100, 200],
        actions: [
            {
                action: 'open',
                title: 'باز کردن گردونه',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzY2N2VlYSI+PHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJ6Ii8+PC9zdmc+'
            },
            {
                action: 'dismiss',
                title: 'بستن',
                icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzk5OTk5OSI+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNUwxMiAxMC41OUw2LjQxIDVMNSA2LjQxTDEwLjU5IDEyTDUgMTcuNTlMNi40MSAxOUwxMiAxMy40MUwxNy41OSAxOUwxOSAxNy41OUwxMy40MSAxMkwxOSA2LjQxeiIvPjwvc3ZnPg=='
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('گردونه شانس Tetisnet', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
    console.log('Service Worker: Notification clicked');
    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(
            clients.openWindow('/')
        );
    } else if (event.action === 'dismiss') {
        // Just close the notification
        return;
    } else {
        // Default action - open the app
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handler for communication with main thread
self.addEventListener('message', event => {
    console.log('Service Worker: Message received', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
});

// Error handler
self.addEventListener('error', event => {
    console.error('Service Worker: Error occurred', event.error);
});

// Unhandled rejection handler
self.addEventListener('unhandledrejection', event => {
    console.error('Service Worker: Unhandled promise rejection', event.reason);
    event.preventDefault();
}); 