if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se intalo correctamente', registrado) )
        .catch( error => console.log('Fallo la intalacion...', error) )
} else {
    console.log('Servive workers no soportados');
}