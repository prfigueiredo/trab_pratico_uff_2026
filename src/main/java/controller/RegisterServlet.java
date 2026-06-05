package controller;

import dao.UserDAO;
import model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

// Endpoint responsável pelo cadastro de usuários
@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    // Responde às requisições OPTIONS utilizadas pelo CORS
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        // Permite requisições vindas do React
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

        // Métodos HTTP permitidos
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

        // Cabeçalhos permitidos
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        resp.setStatus(HttpServletResponse.SC_OK);
    }

    // Processa o cadastro de novos usuários
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        // Configuração de CORS para comunicação com o React
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        // Obtém os dados enviados pelo formulário
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        try {

            // Cria objeto de usuário com os dados recebidos
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);

            // Salva o usuário no banco de dados
            UserDAO dao = new UserDAO();
            dao.save(user);

            // Retorna sucesso para o front-end
            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().write("Usuário cadastrado com sucesso");

        } catch (Exception e) {

            // Registra erro no console do servidor
            e.printStackTrace();

            // Retorna erro para o front-end
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            resp.getWriter().write("Erro ao cadastrar usuário: " + e.getMessage());
        }
    }
}