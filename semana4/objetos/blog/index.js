function buttonSendForm() {
    const guardaTitulo = document.getElementById("titulo-post")
    const guardaAutor = document.getElementById("autor-post")
    const guardaConteudo = document.getElementById("conteudo-post")

    const post = {
        titulo: guardaTitulo,
        autor: guardaAutor,
        conteudo: guardaConteudo
    }

console.log(guardaTitulo.value)
console.log(guardaAutor.value)
console.log(guardaConteudo.value)
}