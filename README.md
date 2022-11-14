# Case-Amaro-BackEnd

*[Documentação](https://documenter.getpostman.com/view/19889845/2s8YmEz6qn)*
*[Deploy](https://case-amaro.onrender.com/)*

## Linguagens e ferramentas utilizadas:
TYPESCRIPT
NODE.JS
MYSQL

![tabelas](https://user-images.githubusercontent.com/84422472/201737689-9986576e-1f3c-4185-8f07-c6347f7b2df1.png)


*Enunciado*

## O que funciona

1 - Cadastro de produtos
2 - Pegar produto pelo nome
3 - Criar Tag
4 - Buscar tag pelo nome
5 - Inserir id da tag e do id do produto
6 - Pegar as informações do produto pelo id
7 - Pegar as informações do produto pelo id da tag

*Criação de API para cadastro e consulta de produtos, você precisa criar uma API com os seguintes requisitos:*

End-point para inserção de dados
O cliente poderá enviá-los em arquivos json ou xml e a API deverá inserir no banco de dados.
Escolha o banco de dados que achar melhor.
End-point para consulta destes produtos
Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome, deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points.

*Requisitos Obrigatórios*
Ter uma cobertura de teste relativamente boa, a maior que você conseguir.
Usar PHP ou outra linguagem de sua preferencia.
Pode usar qualquer framework PHP para o desenvolvimento ou não usar nenhum, fica a sua escolha.
Criar um cache para consulta.
PLUS - Não necessário
Colocar uma autenticação JWT.

*Orientações*
Procure fazer uma API sucinta.
Os arquivos (json, xml) junto com o formato que o cliente irá enviar estão no repositório.
Pensa em escalabilidade, pode ser uma quantidade muito grande de dados.
Coloque isso em um repositório GIT.
Colocar as orientações de setup no README do seu repositório.


## Instruções para usar o case localmente

*No terminal, executar os segintes comandos:*

git clone https://github.com/Bentojessica/Case-Amaro-BackEnd

Para rodar o servidor (back end) Crie um arquivo .env e adicione as variáveis de ambiente assim:

DB_HOST =

DB_USER =

DB_PASSWORD =

DB_SCHEMA =

No backend roda o comando:
npm install

e

npm run dev
