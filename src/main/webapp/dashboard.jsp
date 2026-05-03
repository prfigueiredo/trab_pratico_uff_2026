<%@ page import="model.User" %>

<%
    // Recupera o usuário da sessão
    User user = (User) session.getAttribute("user");

    // Verifica se o usuário está autenticado
    if (user == null) {
        // Redireciona para login caso não esteja logado
        response.sendRedirect("login.jsp");
        return;
    }
%>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <!-- Área principal da página -->
    <main class="container">

        <!-- Mensagem personalizada com dados da sessão -->
        <h1>Bem-vindo, <%= user.getName() %></h1>
    </main>
</body>
</html>