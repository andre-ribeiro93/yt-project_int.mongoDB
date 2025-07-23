# yt-project_int.mongoDB

Essa é uma aplicação construída em React com Typescript baseada no YouTube. Esse projeto possui diversas funcionalidades como pesquisar vídeos, navegar pela barra de categorias, onde o clique em algum dos botões faz com que a página recarregue somente com vídeos relacionados a categoria selecionada. Também é possível criar uma conta e fazer login. Quando logado, é possível cadastrar layouts de vídeos com título, thumbnail e descrição, assim como excluir videos salvos. Essa aplicação consome a API de dados do YouTube e também possui uma API própria construída com Node.JS que é responsável pelo cadastro de novos usuários, autenticação e login, cadastro e exclusão de vídeo, além da coleta de dados do usuário logado. Essa API inicialmente integrava com um banco de dados relacional (MariaDB), porém foi refatora e atualmente está integrando com o MongoDB.

[Clique aqui e acesse o projeto finalizado](http://yt-project-int-mongo-db.vercel.app)

Obs.: após algum tempo sem receber requisições a API pode demorar um pouco para retornar, pois entra em stand by devido ao plano de hospedagem que utilizei. Sendo assim, em processos de criação de usuários e logins, aguarde um pouco que ela irá retornar e funcionará normalmente.


## 📦 Tecnologias utilizadas

  - React JS

  - TypeScript
  
  - Node.js

  - MongoDB

## 📚 Bibliotecas

  - Styled-components

  - Axios

  - Date-fns

  - iso8601-duration

  - phosphor-react



## 📝 Instruções

### ⚙️ Requisitos

  Antes de começar, certifique-se de ter os seguintes recursos instalados em sua máquina:

  - Node.js

  - Git

  - npm


### 🚀 Instalação

1. Clone o repositório:

    git clone https://github.com/andre-ribeiro93/yt-project_int.mongoDB.git  
    cd yt-api

2. Instale as dependências:

    npm install

3. Configure o arquivo .env:

    Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

    VITE_YOUTUBE_API_KEY = <your_youtube_api_key>  
    VITE_APP_API_BASE_URL = <API_URL>


### ▶️ Executando o projeto

    npm run dev

    O servidor será iniciado em: http://localhost:5173/


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.