const start = () => {

    while(true){
        let opcao = "cadastrar"
        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Valos listar")
                break
            case "sair":
                return
        }
    }
}

start()