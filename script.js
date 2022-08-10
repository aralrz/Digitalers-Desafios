/*
-Cree una función llamada  function gastoConIva() que acepte un número 
y devuelva ese número más el 21% que es el valor del IVA.
-Luego crea una function map() que tome dos entradas o parámetros: un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
-Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar
la función callback en cada elemento de la matriz de entrada.
*/

//funcion gastoConIVA()
function gastoConIVA(num){
    return num*1.21;
}

//funcion map()
function map(array, callback){
    const nuevoArray= [];
    for (let i=0; i<array.length;i++){
        nuevoArray.push(callback(Number(array[i])))
    }
    return nuevoArray;
}

//implemento las dos funciones
const numeros= [100, 200, 300, 400, 500];
console.log(map(numeros, gastoConIVA));