# Trabalho Prático 2

Aplicação web Java MVC com autenticação de usuários (cadastro e login), utilizando React, Java Servlets, MySQL e Apache Tomcat.

## Arquitetura

O projeto foi refatorado para uma arquitetura desacoplada:

React (Front-end)
        ↓
    Fetch API
        ↓
Java Servlets (Back-end)
        ↓
      JDBC
        ↓
      MySQL

O front-end é responsável pela interface e interação com o usuário, enquanto o back-end atua como uma API para autenticação e persistência de dados.

\---

## Pré-requisitos

Antes de começar, instale:

* [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
* [Apache Maven](https://maven.apache.org/download.cgi)
* [Apache Tomcat 10+](https://tomcat.apache.org/download-10.cgi)
* [MySQL Community Server 8.0+](https://dev.mysql.com/downloads/installer/)
* [Eclipse IDE](https://www.eclipse.org/downloads/) (opcional, mas recomendado)
* [Node.js LTS](https://nodejs.org/en/download) (inclui npm)

\---

## 1\. Configuração do Banco de Dados

Após instalar e iniciar o MySQL, conecte-se ao servidor:

```bash
mysql -u root -p
```

Execute os comandos abaixo para criar o banco e a tabela:

```sql
CREATE DATABASE mvc\_db;

USE mvc\_db;

CREATE TABLE users (
    id INT AUTO\_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);
```

> A aplicação assume usuário `root` com senha `root`. Caso sua configuração seja diferente, edite o arquivo `src/main/java/util/DBConnection.java` com suas credenciais.

\---

## 2\. Executando o Back-end

Clone o repositório e entre na pasta:

```bash
git clone <url-do-repositorio>
cd trab-pratico_uff_2026
```

Gere o arquivo `.war` com Maven:

```bash
mvn clean install
```

O arquivo será gerado em `target/trab-pratico-1.0.war`.

Copie o `.war` para a pasta `webapps` do Tomcat:

```bash
cp target/trab-pratico-1.0.war /caminho/do/tomcat/webapps/
```

Inicie o Tomcat:

```bash
# Linux/macOS
/caminho/do/tomcat/bin/startup.sh

# Windows
C:\\caminho\\do\\tomcat\\bin\\startup.bat
```

O back-end ficará disponível em (verificar porta):

```http://localhost:8082/trab-pratico-1.0```

\---

## 3\. Executando o Front-end

Entre na pasta do React:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O React ficará disponível em:

```http://localhost:5173``` ou ```http://localhost:5174``` dependendo da porta disponível.

## 4\. Aplicação Publicada

O front-end foi publicado no GitHub Pages:

```https://prfigueiredo.github.io/trab_pratico_uff_2026/```

Para utilizar as funcionalidades da aplicação é necessário manter o back-end Java em execução localmente.

## 5\. Testes da API

Os testes da API foram realizados utilizando o Bruno.

A collection está disponível na pasta:

```txt
bruno/
```

Endpoints testados:

* POST /register
* POST /login
* GET /users
* PUT /users
* DELETE /users

## Estrutura do Projeto

```txt
trab_pratico_uff_2026
│
├── frontend
│   ├── src
│   │   ├── components
│   │   └── pages
│
├── bruno
│
├── src
│   └── main
│       └── java
│
└── pom.xml
```

## Funcionalidades

* Cadastro de usuários
* Login de usuários
* Dashboard com exibição do usuário autenticado
* Comunicação assíncrona utilizando Fetch API
* Componentização com React
* Navegação entre telas utilizando State
* Integração entre React e Java Servlets
* Persistência de dados em MySQL
* API com operações GET, POST, PUT e DELETE
* Testes da API utilizando Bruno