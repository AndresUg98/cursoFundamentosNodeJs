function hola(nombre){

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            console.log('Hola, ' + nombre);

            resolve(nombre);

        },1000)
    });


}

function hablar(nombre){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {

            console.log('Bla bla bla bla....');

            resolve(nombre);

        }, 1000);
    });


}


function adios(nombre, otroCallback){

    return new Promise((resolve,reject)=>{

        setTimeout(function(){

            console.log('Adios, ' + nombre);

            resolve();

        },1000);
    });

}

//--
console.log('Iniciando el proceso..');
hola('Carlos')
    .then((nombre)=>{
        return hablar(nombre);
    })
    .then((nombre)=>{
        return adios(nombre);
    })
    .then((nombre)=>{
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    });