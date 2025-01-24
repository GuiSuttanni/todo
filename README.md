
# Guia de Configuração e Execução do Projeto

Este README descreve como configurar e executar o projeto que é composto por um **frontend** desenvolvido com React e Vite, e um **backend** desenvolvido com Node.js e Express. Ambos os sistemas são integrados para permitir o cadastro e listagem de tarefas.


## Backend

#### Requisitos

- Node.js v20 ou superior
- Conta no Firebase com acesso ao Firestore

#### Configuração

- Clone o repositório do backend
```bash
  git clone <URL_DO_REPOSITORIO_BACKEND>
  cd backend
```

- Instale as dependências:
```bash
  npm install
```

- Configure o Firebase:
    - Crie um novo projeto no Firebase.
    - Habilite o Firestore.
    - Baixe o arquivo serviceAccountKey.json (credenciais) e coloque-o no diretório raiz do backend.

#### Execução

Para iniciar o servidor:
```bash
  npm start
```
O servidor estará disponível em http://localhost:8085.

#### Endpoints

- Inserir Tarefas
    - Rota: **/insert-tasks**
    - Método: **POST**
    - Corpo:
        ```json
        [
            {
                "description": "Criar Login",
                "responsible": "bruno",
                "status": "done"
            }
        ]
        ```
- Listar Tarefas
    - Rota: **/get-tasks**
    - Método: **GET**

#### Testes

Para executar os testes unitários:
```bash
  npm test
```

## Frontend

#### Requisitos

- Node.js v20 ou superior

#### Configuração

- Clone o repositório do frontend
```bash
  git clone <URL_DO_REPOSITORIO_FRONTEND>
  cd frontend
```

- Instale as dependências:
```bash
  npm install
```

- Configure a URL do backend:
    - No arquivo src/api/taskApi.js, altere a constante BASE_URL para o endpoint do backend, por exemplo:
        ```js
        const BASE_URL = 'http://localhost:8085';
        ```

#### Execução

Para iniciar a aplicação:
```bash
  npm run dev
```

A aplicação estará disponível em **http://localhost:5173**

## Observações finais

- Caso utilize outra porta ou URL para o backend, ajuste no arquivo taskApi.js no frontend.

- Consulte a documentação do Firebase caso tenha dúvidas sobre como configurar o Firestore.

- Ainda há muito o que melhorar no código, este foi desenvolvido para fim de estudo a respeito do Node e um teste pratico.

## Layout da aplicação

![image](https://github.com/user-attachments/assets/3bda6cdf-1160-4f54-9d29-f9ebeb69d62f)
