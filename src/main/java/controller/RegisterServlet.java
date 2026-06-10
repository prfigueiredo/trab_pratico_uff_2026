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

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        resp.setStatus(HttpServletResponse.SC_OK);
    }

    // Processa o cadastro de novos usuários
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        // Configuração da resposta como JSON
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // Configuração de CORS para comunicação com o React
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        try {
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(password);

            UserDAO dao = new UserDAO();
            dao.save(user);

            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().write(
                    "{\"success\":true,\"message\":\"Usuário cadastrado com sucesso\"}");

        } catch (Exception e) {
            e.printStackTrace();

            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            resp.getWriter().write(
                    "{\"success\":false,\"message\":\"Erro ao cadastrar usuário\"}");
        }
    }
}