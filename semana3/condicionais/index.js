/* 

**Exercícios de interpretação de código**

EXERCÍCIO 1
O programa "pede na tela" para que o usuário escreva um número qualquer.
Para assegurar de fato que é um número, já está especificado a condicional "number".

Após a escrita desse número ele verifica se o resto da divisão é 0.
Se for, ele imprime "passou no teste".
Caso contrário, imprime "não passou no teste".

Isso verifica se o número é par ou não.

EXERCÍCIO 2
a) Essa é uma forma de "abreviar" a escrita e a redução de condicionais (if, else if, else).
b) O preço da fruta  Maçã  é  R$ 2.25. (tem espaços demais na frase)
c) O programa pegará o valor "default" pois não reconhece o item especificado (indefinido).

EXERCÍCIO 3
a) Para o usuário digitar um número. E está especificado que será somente aceito se for um numeral.
b) Caso seja digitado "10", o usuário receberá a mensagem "Esse número passou no teste". Caso
seja um número negativo dará um erro pois a condição pede que seja um número maior que 0.
c) Haverá um erro na última linha, pois o comando console.log está tentando acessar
uma linha (let) que está dentro de um bloco/escopo. Somente "var" respondem quando chamadas fora de um escopo.

**Exercícios de escrita de código**
EXERCÍCIO 4 

let idade = Number(prompt("Qual a sua idade?"))
console.log(idade)

if(idade >= 18) {
    console.log("Vrum! Vrum! Vrum! Você já pode dirigir.") 
} else {
    console.log("Você ainda não pode dirigir, mas um dia poderá.")  
}

EXERCÍCIO 5 

let turno = (prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno.").toUpperCase())
console.log (turno)

if (turno === "M") {
    console.log ("Bom dia!")
} else if (turno === "V") {
    console.log ("Boa tarde!")
} else if (turno === "N") {
    console.log ("Boa noite!")
}

EXERCÍCIO 6

let turno = (prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno.").toUpperCase())
console.log (turno)

switch (turno) {
    case "M":
    console.log ("Bom dia!")
    break;
    case "V":
    console.log ("Boa tarde!")
    break;
    case "N":
    console.log ("Boa noite")
    break;
}

EXERCÍCIO 7 

let genero = (prompt("Qual o gênero do filme que assistiremos?").toLowerCase())
console.log (genero)
let preco = Number(prompt("Qual o valor do ingresso"))
console.log (preco)


if (genero === "fantasia" && preco === 15 ) {
    console.log ("Bom filme!")
} else {
    console.log ("Escolha outro filme")
}

DESAFIO 1

let genero = (prompt("Qual o gênero do filme que assistiremos?").toLowerCase())
console.log (genero)
let preco = Number(prompt("Qual o valor do ingresso"))
console.log (preco)


if (genero === "fantasia" && preco === 15 ) {
    let snack = (prompt("Algum snack para acompanhar o filme?").toLowerCase())
    console.log (snack)
    console.log ("Bom filme com " + snack)
} else {
    console.log ("Escolha outro filme")
}

*/