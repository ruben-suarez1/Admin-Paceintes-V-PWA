//Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker');

    console.log(e);
});

//Activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker Activado');

    console.log(e);
});

//Evento fech para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('fetch...', e);
})