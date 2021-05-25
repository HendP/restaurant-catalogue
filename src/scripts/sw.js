import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './'])); // Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');
    event.waitUntil(CacheHelper.deleteOldCache()); // Delete old caches
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request)); // Add/get fetch request to/from caches
});