🚀 Como executar o projeto
🛠 Pré-requisitos
Para rodar o projeto, é necessário ter o Node.js instalado na máquina. O npm, que é o gerenciador de pacotes do Node.js, já vem junto com a instalação.

📦 Instalação das dependências
Dentro da pasta do projeto, abra o terminal e execute o comando para instalar as dependências.

▶️ Executando o servidor
Após instalar as dependências, inicie o servidor executando o arquivo server.js. Caso queira que o servidor reinicie automaticamente ao detectar alterações no código, utilize o nodemon.

🌍 Endpoints da API
Os endpoints disponíveis permitem realizar operações CRUD sobre os livros. A API pode ser testada usando ferramentas como Insomnia, Postman ou diretamente no navegador para requisições GET.

A API possui as seguintes rotas:

GET /livros: Lista todos os livros armazenados.
GET /livros/:id: Busca um livro específico pelo ID.
POST /livros: Adiciona um novo livro à coleção.
PUT /livros/:id: Atualiza as informações de um livro existente.
DELETE /livros/:id: Remove um livro da coleção.
🛠 Tecnologias Utilizadas
O projeto utiliza Node.js para o servidor, Express.js para a criação das rotas e JSON para armazenar os livros temporariamente.