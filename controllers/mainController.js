const mostraPaginaKanban = (req,res) => {
    console.log("mainController.js","mostraPaginaKanban()")

    // obter os dados atraves do model
    let dados = {
        titulo:"Kanban",
            tarefas: [
      {
        id: 1,
        titulo: "comprar doces",
        prioridade: "normal",
        abertoPor: "José das Dores",
        responsavel: "José Manfred",
        status: "não iniciada",
      },
      {
        id: 2,
        titulo: "Lavar Louça",
        prioridade: "alta",
        abertoPor: "Janete Claudete",
        responsavel: "Claudio Claudete",
        status: "em andamento",
      },
    ],
    }

    // renderizar a pagina com os dados

    res.render("kanban",{dados:dados})
}

module.exports = {
    mostraPaginaKanban
}