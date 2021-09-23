class Siglo{

    obtenerProcedimeinto(){

        let year= prompt("ingresa el año");

        year=parseInt(year);
        
        let siglo=0;
        
        for(let i=0; i<21; i++){
            cien=cien+100;
            console.log(cien+1);
            if(year<cien+1){
              if(year==cien+1){
                siglo=i+1;
                // console.log(siglo);
                return siglo;
              }else{
                siglo=i+1;
                // console.log(siglo);
                return siglo;   
              }
              
            }
            
        }

        alert("El siglo es:" + siglo);
    }

    ejecutarMetodo(){
        this.obtenerProcedimeinto();
    }
}

let miObjeto = new Siglo();
miObjeto.ejecutarMetodo()