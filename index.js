//importa modulos do inquirer
const { select, input, checkbox } = require('@inquirer/prompts')

//importa modulo fs do node
const fs = require('fs').promises


//Primeira mensagem a ser apresentada ao iniciar o programa
let mensagem = "Bem vindo ao APP de metas!"

//Cria variavel null das metas
let metas

//Função para carregar a metas do arquivo metas.json
const carregarMetas = async () => {
    try {
        const dados = await fs.readFile("metas.json", "utf-8")
        metas = JSON.parse(dados)
    }
    catch(erro){
        metas = []
    }
}

//Função para salvar as metas no arquivo metas.json
const salvarMetas = async () => {
    await fs.writeFile("metas.json", JSON.stringify(metas, null, 2))
}

//Função para cadastrar uma nova meta
const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})
    if(meta.length == 0){
        mensagem = "A meta não pode ser vazia!"
        return
    }

    metas.push(
        {value: meta, checked:false}
    )
    mensagem = "Meta cadastrada!"
}

//Função para listar as metas
const listarMetas = async () => {
    if(metas.length == 0){
        mensagem = "Você não tem metas cadastradas!"
        return
    }else{
        const respostasMarcadas = await checkbox({
            message: "Use as setas para movimentar, o espaço para selecionar e o enter para avançar",
            choices: [...metas],
            instructions: false
        })

        metas.forEach((m) => {
            m.checked = false
        })

        if(respostasMarcadas.length == 0){
            mensagem = "Nenhuma meta selecionada"
            return
        }

        respostasMarcadas.forEach((resposta) => {
            const meta = metas.find((m) => {
                return m.value == resposta
            })

            meta.checked = true
        })

        mensagem = 'Metas concluidas'
    }
}

//Função para filtar e listar as metas realizadas
const metasRealizadas = async () => {
    const realizadas = metas.filter((realizada) => {
        return realizada.checked
    })

    if(realizadas.length == 0){
        mensagem = "Nenhuma meta realizada"
        return
    }

    await select({
        message: "Metas realizadas",
        choices:[...realizadas]
    })
}

//Função para filtrar e listar as metas pendentes
const metasPendentes = async() => {
    const pendentes = metas.filter((pendente) => {
        return pendente.checked == false
    })

    if(pendentes.length == 0){
        mensagem = "Nenhuma tarefa pendente!"
        return
    }

    await select({
        message: "Metas Pendentes",
        choices: [...pendentes]
    })
}

//Função para selecionar e deletar meta(s)
const deletarMetas = async() => {
    if(metas.length == 0){
        mensagem = "Sem metas cadastradas"
        return
    }else{
        const listaMetas = metas.map((meta) => {
            return {value: meta.value, checked: false}
        })
    
        const itensADeletar = await checkbox({
            message: "Selecione para deletar",
            choices: [...listaMetas],
            instructions: false
        })

        if(itensADeletar == 0){
            mensagem = "Nenhum item a deletar"
            return
        }

        itensADeletar.forEach((deletar) => {
            metas = metas.filter((meta) => {
                return meta.value != deletar
            })
        })

        mensagem = "Meta(s) deletada(s)"
    }
}

//Função para limpar o console e mostrar mensagem da referente a ultima ação
const mostrarMensagem = () => {
    console.clear();

    if(mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

//Função inicial que contem todas as opções
const start = async () => {

    await carregarMetas()

    while(true){
        mostrarMensagem()
        await salvarMetas()

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas pendentes",
                    value: "pendentes"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ],
            instructions: false
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "pendentes":
                await metasPendentes()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log("Até depois!")
                return
        }
    }
}

//Chama a função inicial
start()