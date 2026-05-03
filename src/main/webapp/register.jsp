<%@ page contentType="text/html;charset=UTF-8" %>
    <html>

    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body>
        <h2>Cadastro</h2>
        <form action="register" method="post">
            <input type="text" name="name" placeholder="Nome" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
        </form>
    </body>

    </html>