# Loopback4

## Inicialização
- Para instalação do lb4, utilizamos o comando npm i -g @loopback/cli 

## App 
- A partir do comando lb4 app, construimos uma REST API para Filme e Receita.

## Model
- Com a criação do modelo, inserimos as propriedades no Filme (id, title, release_year, language, lenght, rating), como também na Receita (id, país, valor).

## Datasource
- Para a datasource utilizamos o MySQL.

## Controller
- Utilizamos o controller para definir os endpoints relativamente a Filme e Receita, os quais foram definidos como: /filmes e /receitas.

## Relation
- Definimos a cardinalidade 1:n, em que um filme poderá ter várias receitas associadas, uma vez que as receitas de um filme foram divididas por diferentes países.

# React-Admin
- Após todos os comandos para instalação do React-Admin, tivemos acesso a parte do cliente. Utilizamos a porta 3006, uma vez que a porta 3000 é utilizada para a API. 
- Com a edição do App.js, conseguimos estabelecer uma conexão entre a nossa API e o React-Admin.
- Inicialmente realizamos a importação dos Filmes e depois das Receitas.
- Corrigimos alguns dos "Guessed Components" para melhor adequação dos dados.
- Adicinamos o botão do "Edit".