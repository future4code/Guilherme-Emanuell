/* Exercícios de interpretação de código 

1 - No enunciado cada variável recebeu um respectivo valor.
No primeiro "console.log" ele pediu para imprimir somente o valor da segunda variável.
Depois essa segunda váriavel recebeu um novo valor. Com isso no segundo "console.log" 
ele pediu para imprimir o valor da primeira e da segunda variável, mas tendo a segunda
váriavel já com um novo valor. 

2 - As variáveis receberam diferentes valores, mas como ocorreram substituições
ao decorrer da escrita, todas ao final receberam o mesmo valor de 10 no "console.log".

*/

/* Exercícios de escrita de código 

1 -

let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

Foi impresso "undefined" porque de fato é um valor indefinido. Não é que ele seja nulo,
ele realmente ainda não foi definido, nem como um "valor" ou como "nulo". 

let nome = prompt ("Qual o seu nome?")
let idade = prompt ("Qual a sua idade?")
console.log (nome)
console.log (idade)
console.log (typeof nome)
console.log (typeof idade)

Ao imprimir o tipo, pude notar que mesmo me referindo a idade, o tipo é "string" e não "number".

console.log(`Olá ${nome}, você tem ${idade} anos.`) 

///////////

2 -

let dia = prompt ("1. Bom dia, boa tarde ou boa noite?")
console.log ("1. Bom dia, boa tarde ou boa noite?")
console.log (`Resposta: ${dia}.`)

let nome = prompt ("2. Qual o seu nome?")
console.log ("2. Qual o seu nome?")
console.log (`Resposta: ${nome}.`)

let idade = prompt ("3. Qual a sua idade?")
console.log ("3. Qual a sua idade?")
console.log (`Resposta: ${idade}.`)

let tudoBem = prompt ("4. Está tudo bem com você?")
console.log ("4. Está tudo bem com você?")
console.log (`Resposta: ${tudoBem}.`)

let vida = prompt ("5. Qual o sentido da vida?")
console.log ("5. Qual o sentido da vida?")
console.log (`Resposta: ${vida}.`)

///////////

3 -

const comidaFav = ["Lasanha", "Strogonoff", "Pizza", "Hamburguer", "Feijão Tropeiro"]
console.log (comidaFav)
console.log ("Essas são as minhas comidas favoritas:")
console.log (comidaFav[0])
console.log (comidaFav[1])
console.log (comidaFav[2])
console.log (comidaFav[3])
console.log (comidaFav[4])

let suaComidaFav = prompt ("Qual a sua comida favorita?")
const comidaFav = ["Lasanha", "Strogonoff", "Pizza", "Hamburguer", "Feijão Tropeiro"]
console.log (comidaFav)
console.log ("Essas são as minhas comidas favoritas:")
console.log (comidaFav[0])
console.log (`${suaComidaFav}`)
console.log (comidaFav[2])
console.log (comidaFav[3])
console.log (comidaFav[4])

///////////

4 -  

let tresPerguntas = ["Hoje vai chover?", "Você come muito?", "Essa caneta é azul?"]
let tresRespostas = [false, true, true]
console.log (tresPerguntas[0], tresRespostas[0])
console.log (tresPerguntas[1], tresRespostas[1])
console.log (tresPerguntas[2], tresRespostas[2]) 

*/