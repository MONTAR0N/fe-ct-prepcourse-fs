/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   /*const array = []
   for (const clave in objeto) {
      if(objeto.hasOwnProperty(clave)) {
         array.push([clave, objeto[clave]])
      }
   }
   return array*/
   const array = []
   let keys = Object.keys(objeto)
   let values = Object.values(objeto)

   for(let i = 0 ; i < keys.length ; i++) {
      array.push([keys[i], values[i]])
   }
   return array
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   /*const contador ={}
   let stringSeparada = string.split("").sort()
   for(let i = 0 ; i < stringSeparada.length ; i++) {
      const item = stringSeparada[i]
      if(contador[item]) {
         contador[item]++
      } else {
         contador[item] = 1
        
      }
   console.log(contador)   
   } return contador*/

   const contador = {}
   let stringSeparada = string.split("").sort()
   for(let i = 0 ; i < stringSeparada.length ; i++) {
      if(stringSeparada[i] !== stringSeparada[i - 1]) {
         contador[stringSeparada[i]] = 1
      } else {
         contador[stringSeparada[i]] +=1
      }
      
   } return contador
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = ""
   let minusculas = ""
for(let i = 0 ; i < string.length ; i++) {
   if( string[i] === string[i].toUpperCase()) {
      mayusculas += string[i]
   } else {
      minusculas += string[i]
   }
} 
let stringOrdenada = mayusculas + minusculas

return stringOrdenada

}


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  const palabras = frase.split(" ")
  let fraseArreglada = "" 

  for(let i = 0 ; i < palabras.length ; i++) {
   const unaPalabra = palabras[i]
   
   let alReves = unaPalabra.split("").reverse().join("")
 
   fraseArreglada += alReves
  if(i !== palabras.length - 1) {
   fraseArreglada += " " 
  } 
  
   }
  
  console.log(fraseArreglada)
  return fraseArreglada
   
  
    
}
asAmirror("Chiquitín Cacú")

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  
   /*
   1- convertir el numero en string.
   2- convertir string en array.
   3- dar vuelta el array.
   4- convertir array en string.
   5- convertir el estring en numero.
   6- comparar numero invertido con numero.
    */ 
let string = numero.toString()
let array = string.split("")
let sitring2 = array.reverse().join("")
numeroAlReves = parseInt(sitring2)

if(numero === numeroAlReves) {
   return "Es capicua"
} else {
   return "No es capicua"
}

}



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   /*
   1- convertir string en array.
   2- iterar array en un bucle.
   3- agregar a un nuevo array los elementos que no coincidan con "a", "b" o "c".
   nota: no se puede eliminar directamente un elemento de un array con delete, por lo que hay que pushear uno nuevo.
   */
  const aux = []
  let array = string.split("")
  
  for(let i = 0 ; i < array.length ; i++) {
     if(array[i] !== "a" && array[i] !== "b" && array[i] !== "c") {
        aux.push(array[i])
      }
   }
   let palabraFinal = aux.join("")
   console.log(palabraFinal)
   return palabraFinal

}
deleteAbc("abacodiugneciuhtmgabyti")

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
const length = arrayOfStrings.length

for(let i = 0 ; i < length ; i++) {
   //Bucle exterior para iterar en el array completo.
   for(let j = 0 ; j < length - i - 1 ; j++) {
      //Bucle interior para iterar y comparar los subconjuntos no ordenados.
      if(arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {
         //Le damos como condición que si la palabra de la posición actual es más corta que la siguiente, realice un cambio:
         const temp = arrayOfStrings[j]
         arrayOfStrings[j] = arrayOfStrings[j + 1]
         arrayOfStrings[j + 1] = temp
         //Le ordenamos que cambie la palabra que está en el la posición actual por la de la posición siguiente.
      }
   }
   console.log(arrayOfStrings)
}
return arrayOfStrings 

}
sortArray(["como", "estamos", "po", "cetumadrana"])

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   const aux = []

   for(let i = 0 ; i < array1.length ; i++) {
      for(let j = 0 ; j < array2.length ; j++) {
         if(array1[i] === array2[j]) {
            aux.push(array1[i])
         } 
            
         }
      }
   
   console.log(aux)

   return aux
}
buscoInterseccion([5, 6, 7, 8, 19, 2, 4], [1, 2, 3, 4])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
