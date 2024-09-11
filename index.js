const { select, input, checkbox } = require('@inquirer/prompts')

let metas = []

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})
    if(meta.length == 0){
        console.log("A meta não pode ser vazia!")
        return
    }

    metas.push(
        {value: meta, checked:false}
    )
}

const listarMetas = async () => {
    if(metas.length == 0){
        console.log("Você não tem metas cadastradas!")
    }else{
        const respostasMarcadas = await checkbox({
            message: "Use as setas para movimentar, o espaço para selecionar e o enter para avançar",
            choices: [...metas],
            instructions: false
        })

        metas.forEach((m) => {
            m.checked = false
            console.log(m)
        })

        if(respostasMarcadas.length == 0){
            console.log("Nenhuma meta selecionada")
            return
        }

        respostasMarcadas.forEach((resposta) => {
            const meta = metas.find((m) => {
                return m.value == resposta
            })

            meta.checked = true
        })

        console.log('Metas concluidas')
    }
}

const start = async () => {

    while(true){
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
                    name: "Sair",
                    value: "sair"
                }
            ],
            instructions: false
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log("Meta cadastrada!")
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("Até depois!")
                return
        }
    }
}

start()