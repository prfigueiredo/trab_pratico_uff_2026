<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <!-- Container principal -->
    <main class="container">
        <h2>Cadastro</h2>

        <!-- Formulário que envia dados para o Servlet "/register" -->
        <form action="register" method="post" class="form-login">
            
            <!-- Nome do usuário -->
            <input type="text" name="name" placeholder="Nome" required>

            <!-- Email -->
            <input type="email" name="email" placeholder="Email" required>

            <!-- Senha -->
            <input type="password" name="password" placeholder="Senha" required>

            <!-- Botão de envio -->
            <button type="submit">Cadastrar</button>
        </form>

        <!-- Exibe mensagem de erro se o back-end enviar -->
        <% if (request.getAttribute("error") != null) { %>
            <p class="erro"><%= request.getAttribute("error") %></p>
        <% } %>

        <!-- Link para login -->
        <a href="login.jsp">Já tem conta? Fazer login</a>
    </main>
</body>
</html>