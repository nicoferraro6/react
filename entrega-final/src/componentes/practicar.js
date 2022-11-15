// Promise
const handler = false;
const Promesa = new Promise((resolve, rejected) => {
    if(handler){
        resolve(() =>{
            return 2 + 2;
        });
    }else{
        rejected()
    }
})  
Promesa.then((resultado) => {
    console.log(resultado())
})
.then(() => {})
.catch((error) =>{
    console.log("Ocurrió un error")
})
.finally(() => {
    console.log("Soy crack")
})

