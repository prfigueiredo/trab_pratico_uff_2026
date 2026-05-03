<%@ page contentType="text/html;charset=UTF-8" %>
    <html>

    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <h2>Login</h2>
        <form action="login" method="post">
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
        </form>
        <p style="color:red;">${error}</p>
        <a href="register.jsp">Criar conta</a>
    </body>

    </html>