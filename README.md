# 🧑‍💻 Sistema de Gestão de Funcionários





Este projeto implementa um **Sistema de Gestão de Funcionários** simples, desenvolvido como um exercício de JavaScript puro, focado em manipulação de DOM, classes e **streams** de Array (map, filter, reduce).



---



## 🎯 Funcionalidades Implementadas (CRUD e Relatórios)



O sistema cumpre os seguintes requisitos do estudo de caso:



### Manipulação de Dados (Exercícios 1, 2 e 3)



Cadastro e Listagem: Gerenciamento de dados via formulário HTML e exibição dinâmica em tabela.
Excluir e Alterar: Funcionalidades completas de edição e remoção de funcionários.
Arrow Functions (Lambdas): Uso obrigatório para busca, remoção, atualização e eventos de formulário.



### Relatórios (Exercício 4 - Streams JS)



 Salário > R$ 5000: Lista de funcionários que se encaixam no critério (`.filter()`).
 Média Salarial: Cálculo da média dos salários (`.reduce()`).
 Cargos Únicos: Lista de todos os cargos distintos (`.map()` e `new Set()`).
 Nomes em Maiúsculo: Lista de todos os nomes formatados em caixa alta (`.map()`).



---



## 🚀 Como Executar (Desenvolvimento com Docker)



O sistema deve ser versionado no GitHub e deve utilizar container Docker para o desenvolvimento.



### 1. Pré-requisitos

 Docker instalado e em execução.



### 2. Construção da Imagem

Execute o comando no terminal, a partir da pasta raiz do projeto (`sistema-funcionarios`):

```bash

docker build -t gestao-funcionarios .



3. Execução do Container



Inicie a aplicação, mapeando a porta 8080 do seu computador para a porta 80 do container (servidor Nginx):



docker run -d -p 8081:80 --name app-funcionarios gestao-funcionarios



4. Acesso



Abra seu navegador e acesse a aplicação em: http://localhost:8081



📁 Estrutura do Projeto



/sistema-funcionarios

├── index.html          (Interface, Formulário e Tabela)

├── README.md           (Documentação)

├── .gitignore          (Ignora arquivos de ambiente)

├── Dockerfile          (Instruções de build do container)

├── /css

│   └── style.css       (Estilos)

└── /js

&nbsp;   ├── Funcionario.js  (Classe Funcionario)

&nbsp;   └── app.js          (Lógica de Eventos, CRUD e Relatórios)

