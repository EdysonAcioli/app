# Gerenciador de Metas

Este é um aplicativo de linha de comando para gerenciar metas pessoais. Ele permite cadastrar, listar, marcar como concluídas, deletar e visualizar metas pendentes ou realizadas. O aplicativo armazena as metas em um arquivo JSON local.

## Funcionalidades

- **Cadastrar Metas**: Adicione novas metas para organizar suas tarefas.
- **Listar Metas**: Exiba todas as metas cadastradas e marque as que foram concluídas.
- **Ver Metas Realizadas**: Veja as metas que já foram concluídas.
- **Ver Metas Pendentes**: Filtre e exiba apenas as metas que ainda precisam ser realizadas.
- **Deletar Metas**: Selecione e remova metas do arquivo.
- **Persistência de Dados**: As metas são salvas no arquivo `metas.json` e são carregadas ao reiniciar o programa.

## Tecnologias Usadas

- **Node.js**: Plataforma de execução.
- **Inquirer**: Biblioteca para criar prompts interativos no terminal.
- **FS (File System)**: Módulo do Node.js para leitura e escrita de arquivos.
  
## Pré-requisitos

- Node.js instalado na máquina.
- Biblioteca `@inquirer/prompts` instalada.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install @inquirer/prompts
   ```

## Como Usar

1. Execute o script:
   ```bash
   node nome-do-script.js
   ```

2. Ao iniciar o programa, você verá o menu com as opções:
   - **Cadastrar meta**: Adicione uma nova meta.
   - **Listar metas**: Visualize todas as metas e marque as concluídas.
   - **Metas realizadas**: Veja as metas já concluídas.
   - **Metas pendentes**: Filtre e exiba as metas que ainda não foram realizadas.
   - **Deletar metas**: Remova metas selecionadas.
   - **Sair**: Encerre o programa.

3. As metas são salvas automaticamente no arquivo `metas.json`.

## Estrutura do Projeto

```
/seu-repositorio
  |-- nome-do-script.js
  |-- metas.json
  |-- README.md
```

## Exemplo de Uso

```bash
Bem vindo ao APP de metas!
Menu >
1. Cadastrar meta
2. Listar metas
3. Metas realizadas
4. Metas pendentes
5. Deletar metas
6. Sair
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar *pull requests* ou abrir *issues*.

## Licença

Este projeto está licenciado sob a licença MIT.
