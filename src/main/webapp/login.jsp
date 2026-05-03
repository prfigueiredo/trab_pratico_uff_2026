<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <!-- Container principal da página -->
    <main class="container">
        <h2>Login</h2>
        
        <!-- Formulário de login que envia dados para o Servlet "/login" -->
        <form action="login" method="post" class="form-login">
            
            <!-- Campo de email com validação HTML5 -->
            <input type="email" name="email" placeholder="Email" required>

            <!-- Campo de senha -->
            <input type="password" name="password" placeholder="Senha" required>

            <!-- Botão de envio -->
            <button type="submit">Entrar</button>
        </form>

        <!-- Exibe mensagem de erro caso o Servlet retorne -->
        <% if (request.getAttribute("error") != null) { %>
            <p class="erro"><%= request.getAttribute("error") %></p>
        <% } %>

        <!-- Link para página de cadastro -->
        <a href="register.jsp">Criar conta</a>
    </main>
</body>
</html>