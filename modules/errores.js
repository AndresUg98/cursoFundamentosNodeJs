function otraFuncion(){
     serompre();
}


function serompre(){
    return 3 + z;
}

function seRompeAsincrona(){
    setTimeout(() => {
        return 3 + z;
    }, 1000);
}

try{
    //otraFuncion();
    seRompeAsincrona();
}catch(err){
    console.error('Vaya, algo se a roto...');
    console.error(err);
    console.log('Pero no pasa nada lo hemos capturado');
}

