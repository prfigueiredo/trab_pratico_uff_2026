<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <main class="container">
        <h2>Cadastro</h2>

        <form action="register" method="post" class="form-login">
            <input type="text" name="name" placeholder="Nome" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Senha" required>
            <button type="submit">Cadastrar</button>
        </form>

        <a href="login.jsp">Já tem conta? Fazer login</a>
    </main>
</body>
</html>