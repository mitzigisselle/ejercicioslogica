    class Palindromo{
        
        obtenerCadena(){
            var cadena = prompt("Ingresa una cadena");
	        var numchar = cadena.length;
            cadena = cadena.toLowerCase();
            var i;
            var car;
            var cadena_espacio = "";
            var cadena_reves = "";

            //Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
            for (i = 0; i < numchar; i++) {
                car = cadena.charAt(i);
                        //Si el caracter es un espacio
                if (car != " ") {
                    cadena_espacio += car;
                    cadena_reves = car + cadena_reves;
                }
            }
            if (cadena_espacio == cadena_reves) {
                document.write("El texto es un palíndromo");
            }else {
                document.write("El texto No es un palíndromo");
            }
        }
        
        ejecutarMetodo(){
            this.obtenerCadena();
        }
    }
    let miObjeto = new Palindromo();

    miObjeto.ejecutarMetodo();
    
    
    
    
    
        
	