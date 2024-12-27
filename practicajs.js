
/* Dado un numero imprimir si es par o impar



function parimpar(num) {
    let tex=null
    if ( (num % 2 ) === 0 ){
        return " Es Par "  
    } else {
        return " No es Par "
    }
} 
parimpar(11)
*/



/*Dadas tres variables numéricas, determinar cuál es el mayor y mostrarlo en 
consola. Si hay empate, indicarlo.

let n1 = 3
let n2 = 1
let n3 = 1

function mayor(n1,n2,n3) {
    let mayor = null
    let tex = null
    if (n1 >n2 && n1 > n3) {
        mayor = n1
        tex = "n1"
    } else {
        if (n2 > n1 && n2 > n3) {
            mayor = n2
            tex = "n2"
        }  else {
            if (n3 >n1 && n3 > n2) {
                mayor = n3
                tex = "n3"
            }  
        }
    }
    if (mayor != null) {
        return (tex, " numero mayor ", mayor)
    } else {
        if (n1 === n2 && n1 === n3) {
            return ("todos los numeros son iguales ", n1)
        } else {
            if (n1 === n2) {
                return ("n1 y n2 son iguales ", n1);
            }else {
                if (n1 === n3) {
                    return ("n1 y n3 son iguales ", n1);
                } else {
                    return ("n2 y n3 son iguales ", n2);
                }
            }
        }
    }
}*/


/* Dado un número del 0 al 10, mostrar la calificación en texto:
0-5: "Reprobado"
6-7: "Regular"
8: "Bien"
9: "Muy Bien"
10: "Excelente"
function calificaion (calf) {
    let res = null
    let op =null
    if (calf >=0 && calf <= 5 ) {
    op =1
    } else {
        if (calf>=6 && calf<=7 ) {
            op =2
        } else{
             op =calf
        }
    }
    switch (op) {
        case 1 :
           res = "Reprobado"
           break;
         case 2 :
           res = "Regular"
          break;
         case 8 :
           res = "Bien"
            break;
        case 9 :
             res = "Mauy Bien"
             break;
        case 10 :
             res = "Excelente"
            break;
        default:
            res= null
            break;
    }
    if (res == null) {
        return ("La calificion " + calf  + " esta fuera de Rango") 
    } else {
        return ("La calificion " + calf + " es " + res)
    }
}*/

 

/* Pedir un número al usuario. Si el número está entre 1 y 100 (inclusive),
 mostrar "Número válido", si no, "Número fuera de rango   

 const readline = require('readline');
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 rl.question('Numero de Usuario: ', (numero) => {
    if (numero > -1 && numero < 100) {
        console.log("Número válido");
    } else {
        console.log("Número fuera de rango");
    }
    rl.close();
 }); 
 
 def fibonacci(n: Int): Int = {
  if (n <= 1) n
  else fibonacci(n - 1) + fibonacci(n - 2)
}

// Ejemplo de uso
val resultado = fibonacci(8)
println(s"El resultado es: $resultado")
 
 */
/* Escribe una función que reciba un 
número n y devuelva un arreglo con los primeros n números de la secuencia de Fibonacci

let n = 8

function fibo(n) {
    let n1 = 0
    let n2 = 1
    sum= null
    resul = ""+ n1 
    for (let i = 3; i <= n; i++) {
        sum = n1 + n2
        n1 = n2
        n2 = sum 
        resul = resul + ","+ n1 
    }
    return (resul)      
}
 */

/*Escribe una función que determine si un número entero 
positivo es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda).
 
function palindromo(num) {
    palabra = ""+num
    resul = ""
    for (let i = palabra.length - 1; i >= 0; i--) {
        resul = resul + palabra[i]
    }
    if (resul === palabra) {
        console.log("Es un aplindromo")
    } else {
        console.log("No es un aplindromo")
    }
}
palindromo(323)  */

//si tienen distinta longitud no son anagramas


//si son cadenas vacias no son anagramas


//si son iguales no son anagramas


function esAnagrama(str1, str2){
    let letras1, letras2, cmp = false;
    //elimina espacios y aseguramos minúsuclas
    str1 = str1.trim().toLowerCase();
    str2 = str2.trim().toLowerCase();
    //si tienen distinta longitud no son anagramas
    //si son cadenas vacias no son anagramas
    if(str1.length !== str2.length || str1 == str2){
       cmp = false;
    }
    else{
        //convierte en arrays, los ordena y los compara 
        letras1 = str1.split('').sort(); 
        letras2 = str2.split('').sort();  
        cmp = letras1.every(function(v,i){return v==this[i]}, letras2); 
    } 
    return cmp; 
  }
  
  
  //Otra solución
  
  
  function esAnagrama2(str1, str2){
    let comp = false, ind=0;
    //elimina espacios y aseguramos minúsuclas
   str1 = str1.trim().toLowerCase();
   str2 = str2.trim().toLowerCase();
   if(str1.length !== str2.length || str1 == str2){
        comp = false;
    } else{
        do{
          //Comprueba que todas las letras de str2 están en str1        
          //Ve elimando las letras de str1 para detectar repetidas
           comp = str1.includes(str2[ind]);
           str1 = str1.replace(str1[ind],'');
          }while (++ind< str1.length & comp);
    }
    return comp;
  }
