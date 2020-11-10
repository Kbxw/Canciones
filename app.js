/*
    APLICACIÓN:
    - Subir resultado a github
    - Trabajar sobre un array de canciones 
    - [{nombre:'Times go by', artista: 'Madona', anyo: '2003'}]
    - app.js: require(canciones.js)
    - canciones.js: añadir cancion, leer cancion (titulo), editar artista (titulo), 
    borrar cancion (titulo), listar canciones, ordenar canciones segun artista o año.
    - canciones.json
*/

const canciones = require('./canciones.js');

console.log("ADD SONGS ");
canciones.añadirCancion({nombre: 'Sea of Love', artista: 'The National', year: '2000'});
canciones.añadirCancion({nombre: 'Hurt', artista: 'Johnny Cash', year: '2001'});
canciones.añadirCancion({nombre: 'Personal Jesus', artista: 'Depeche Mode', year: '2002'});
canciones.añadirCancion({nombre: "I've got you under my skin", artista: 'Frank Sinatra', year: '2004'});
console.log("READ SONGS ");
canciones.leerCancion(`Personal Jesus`);
console.log("EDIT ARTIST");
canciones.editarArtista('Hurt', 'Johnny Cash');
console.log("SONGS LIST ");
canciones.listarCanciones();
console.log("ORDERED SONGS ");
canciones.ordenarCanciones('year');
console.log('DELETED SONG');
canciones.borrarCancion('Dope','Tommy Cash', '2001')
console.log("ORDERED SONGS ");
canciones.ordenarCanciones('year');