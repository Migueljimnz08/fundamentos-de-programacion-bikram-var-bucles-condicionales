//ej1
let variableSinValor;
//ej2
let booleano1 = true;
let booleano2= false;
//ej3
const PI = 3.14;
//ej4
const TAU = PI * 2;
//ej5
const booleanoAnd = booleano1 && booleano2;
//ej6
const booleanoNot = !booleano1;
//ej7
const booleanoMix0 = (booleano1 || booleano2) && booleano1 || (!booleano1 || !booleano2);
//ej8
let incrementarDesp= 2;
let resultadoDesp = incrementarDesp++;
//ej9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
//ej10
let contarHasta10_2 = 0;
for(i= 0; i < 10; i++) {
    contarHasta10_2++
}
//ej11
let postI = 0;
let postJ = 0;
for(i= 0; i < 11; i++){
    postI += postJ++;
}
//ej12
let sumaPares = 0
for(i=0; i<10; i++){
    if(i % 2 == 0){
        sumaPares += i;
    }
}
//ej13
let variableValorNumerico = 10;
//ej14
const MiNombre = 'Miguel';
//ej15
const MiNumeroFav = 6;
//ej16
const booleanoOr = booleano1 || booleano2;
//ej17
const booleanoMix1 = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico >= MiNumeroFav);
//ej18
const seisNoEsNueve = 6 != 9;
//ej19
const booleanoMix2 = (variableValorNumerico >= 1) < (MiNumeroFav * TAU);
//ej20
const valorSuma = MiNumeroFav + variableValorNumerico;
//ej21
const valorResta = MiNumeroFav - variableValorNumerico;
//ej22
const valorMultiplicacion = MiNumeroFav*variableValorNumerico;
//ej23
const valorDivision = MiNumeroFav / 3;
//ej24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
}
//ej25
let preI = 0;
let preJ = 0;
for(i=0; i<11; i++){
    preI += ++preJ;
}
//ej26
let sumaImpares = 0;
for (i=0; i<10; i++) {
    if(i % 2 != 0){
        sumaImpares += i;
    }
}
