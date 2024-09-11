const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "tomar agua",
    checked: false
}

let metas = [meta]

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
    const restostas = await checkbox({
        message:"Use as setas, o espaço e o enter",
        choices:[...metas],
        instructions: false
    })

    if(restostas.length == 0){
        console.log("Nenhuma meta selecionada")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    restostas.forEach((restosta) => {
        const meta = metas.find((m) => {
            return m.value == restosta
        })

        meta.checked = true
    })

    console.log('metas concluidas')
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
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                console.log("Valos listar")
                break
            case "sair":
                console.log("Até depois!")
                return
        }
    }
}

start()