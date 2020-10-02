/* Exercícios de interpretação de código
EXERCÍCIO 1 
O programa deu uma constante de valor 0 e pediu para 
rodar até que a nova constante seja menor do que 5.
Sendo que a cada passada, seja somado 1.

O novo resultado será a soma do valor atualizado com o número da passada da nova constante.
Por isso o resultado no console é 10.

EXERCÍCIO 2
a) Somente os números do array lista que são maiores do que 18.
b) Da forma que está escrito o programa, não. Será necessário acrescentar
um contador próprio para os índices de cada elemento.


Exercícios de escrita de código 

EXERCÍCIO 3 
a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

for (let elemento of arrayOriginal) {
    console.log(elemento)
} 

b) 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 

for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]/10)
    }

c) 

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] 
let novoArrayPar =[]

for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i]%2 === 0) {
        let elemento = arrayOriginal[i]
        novoArrayPar.push(elemento)
    }
    console.log(novoArrayPar)
}

*/