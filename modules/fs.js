const fs = require('fs');
const { Z_FIXED } = require('zlib');

function leer(ruta, callback){
    fs.readFile(ruta, (err, data)=>{
        callback(data.toString());
    });


};

function escribir(ruta, contenido, callback){

    fs.writeFile(ruta, contenido, (err)=>{
        if (err) {
            console.error('No he podido escribirlo ', err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    })

}

function borrar(ruta, callback){
    fs.unlink(ruta,callback);
    

};
//leer(__dirname + '/archivo.txt',console.log);

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)

borrar(__dirname + '/archivo1.txt',console.log)