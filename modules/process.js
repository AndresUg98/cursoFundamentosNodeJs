process.on('beforeExit',()=>{
    console.log('El proceso va a terminar');
});


process.on('exit',()=>{
    console.log('Ale, el proceso acabo');
});


process.on('uncaughtException',(err,origen)=>{
    console.error('vaya, se nos ha olvidado capturar un error');
    console.error(err);
});

//functionQueNoexiste();

// process.on('uncaughtRejection');