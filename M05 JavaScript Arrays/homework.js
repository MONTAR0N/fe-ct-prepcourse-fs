/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/


function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
let retornarElemento = array[0]
return(retornarElemento)

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   let largoDeArray = array.length
   return(largoDeArray)
}


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const resultado = []
for(let i = 0 ; i < array.length ; i++) {
   resultado.push(array[i] + 1) 
} return resultado
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento)

return(array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(array) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
return array.join(" ")
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true
   } else {
      return false
   }
}

function agregarNumeros(array) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
 let sumaTotal = 0
   for (let i = 0 ; i < array.length ; i++) {
 
   sumaTotal = sumaTotal + array[i]
 } 

 return sumaTotal
}


function promedioResultadosTest(array) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
let suma = 0

for (let i = 0 ; i < array.length ; i++) {
   suma = suma + array[i]
  promedio = suma / array.length
} return promedio
}

function numeroMasGrande(array) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
let numMax = 0

for(let i = 0 ; i < array.length ; i++) {
   if(array[i] > numMax) {
      numMax = array[i]
   }
} return numMax

}

function multiplicarArgumentos(array) {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   let multiplicador = 1
 if (arguments.length === 0) {
   return (0);
 } else if(arguments.length === 1) {
   return (array)
 } else { 
   for(i = 0 ; i < arguments.length ; i++) {
      multiplicador = multiplicador * arguments[i]
   } return (multiplicador)
 } 
}
  
   


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
 let contador = 0

 for(let i = 0 ; i < array.length ; i++) {
   if(array[i] > 18) {
      contador++
   }
 } return contador
}

function diaDeLaSemana(array) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
   if(array === 1 || array === 7) {
      return "Es fin de semana"
   } else {
      return "Es dia laboral"
   }
   }
   


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().startsWith("9")
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   
   for(i = 0 ; i < array.length ; i++) {
      if(array[i] !== array[0]) {
       return  false;
      }
   } {
         return true;
      }
 
   }

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesPedidos = ["Enero", "Marzo", "Noviembre"]
   const mesesEncontrados = []

   for(let i = 0 ; i < array.length ; i++) {
      const mes = array[i]
      if(mesesPedidos.includes(mes)) {
         mesesEncontrados.push(mes)
      } 
      } 
       if (mesesEncontrados.length === mesesPedidos.length) {
         return mesesEncontrados
      } else {
         return "No se encontraron los meses pedidos"
      }
   } 
      
   ;


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
 const tabla6 = []

 for(let i = 0 ; i <= 10 ; i++) {
   tabla6.push(i * 6)
 }  return tabla6
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  const mayores100 = []

  for(let i = 0 ; i < array.length ; i++) {
   if(array[i] > 100) {
      mayores100.push(array[i])
   }
  } return mayores100
}
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
const aux = []
let aux2 = false

for (let i = 0 ; i < 10 ; i++) {
   num = num + 2
aux.push(num)

 if (num === i) {
   aux2 = true
   break
 }
} if (aux2) {
   return "Se interrumpió la ejecución"
} else {
   return aux
}
}

 





function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const aux = []
for(let i = 0 ; i < 9 ; i++) {
   num = num + 2
   aux.push(num)
   if(i === 5) {
      continue
   }
} return aux

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
}
