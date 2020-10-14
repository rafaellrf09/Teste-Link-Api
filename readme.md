# Desafio Link Api

## Dependências

-   Node.js:
É necessário instalar a versão 12.X do Node.js ou posterior.
Para realizar a instalação basta seguir as instruções contidas na documentação oficial do Node.js.

https://nodejs.org/pt-br/download/package-manager/

Git:
Caso necessário, realizar as orientações contidas na página do projeto.

https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git


## Instalação

Para instalar o projeto faça:
&nbsp;

-   Clonar o projeto;
&nbsp;

-   Acessar, pelo terminal de comandos do Sistema Operacional, a pasta onde será depositado o projeto.
&nbsp;

Ex: A pasta "my_project" criada para receber os arquivos do projeto.
&nbsp;

Para o Linux:
$ cd /home/user/my_project
&nbsp;

Para o Mac:
$ cd /Users/user/my_project
&nbsp;

Para o Windows:
$ cd /c/user/my_project
&nbsp;

-   Digitar o comando para clonar o projeto:
&nbsp;

$ git clone https://github.com/rafaellrf09/Deliverymuch-Test.git
&nbsp;

-   Acessar a pasta do projeto.
&nbsp;

-   **Caso tenha Docker instalado**:
&nbsp;
        basta utilizar o comando *docker-compose up --build*;
&nbsp;

-   **Caso não tenha Docker instalado**:
&nbsp;
        copiar o arquivo *.env.example* para *.env* na raiz do projeto;
&nbsp;
        dados do *.env* foram enviados no email.
&nbsp;
        você deverá dar um *npm install* ou *yarn add*;
&nbsp;

&nbsp;
## Rotas
Por padrão o projeto deverá rodar em: **http://localhost:3333**
&nbsp;
**GET localhost:3333/deals** -> mostra os contratos do Pipedrive com status de *won*
&nbsp;
**GET localhost:3333/pedidos** -> mostra os pedidos criado no bling
&nbsp;
**GET localhost:3333/criar-pedido** -> cria pedidos no bling com base no resultado dos contratos do Pipedrive
&nbsp;
**GET localhost:3333/save-orders** -> cria no db Mongo os pedidos do bling por dia e total
&nbsp;
**GET localhost:3333/orders** -> mostra do db mongo os pedidos por dia e total
&nbsp;
**DELETE localhost:3333/orders** -> deleta todos os pedidos do db mongo


