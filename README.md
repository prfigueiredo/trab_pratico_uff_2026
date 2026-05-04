# Trabalho Prático 1

Aplicação web Java MVC com autenticação de usuários (cadastro e login), utilizando Servlets, JSP, MySQL e Apache Tomcat.

\---

## Pré-requisitos

Antes de começar, instale:

* [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
* [Apache Maven](https://maven.apache.org/download.cgi)
* [Apache Tomcat 10+](https://tomcat.apache.org/download-10.cgi)
* [MySQL Community Server 8.0+](https://dev.mysql.com/downloads/installer/)
* [Eclipse IDE](https://www.eclipse.org/downloads/) (opcional, mas recomendado)

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

## 2\. Build do Projeto

Clone o repositório e entre na pasta:

```bash
git clone <url-do-repositorio>
cd trab-pratico
```

Gere o arquivo `.war` com Maven:

```bash
mvn clean install
```

O arquivo será gerado em `target/trab-pratico-1.0.war`.

\---

## 3\. Deploy no Tomcat

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

\---

## 4\. Acesso

Com o Tomcat rodando, acesse no navegador:



http://localhost:8080/trab-pratico-1.0/dashboard.jsp

