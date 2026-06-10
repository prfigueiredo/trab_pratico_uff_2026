package controller;

import com.google.gson.Gson;
import dao.UserDAO;
import model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/users")
public class UserServlet extends HttpServlet {

    private final Gson gson = new Gson();

    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
        resp.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        try {
            User user = gson.fromJson(req.getReader(), User.class);

            if (user == null || user.getId() <= 0) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write(
                        "{\"success\":false,\"message\":\"ID do usuário não informado\"}"
                );
                return;
            }

            UserDAO dao = new UserDAO();
            dao.update(user);

            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().write(
                    "{\"success\":true,\"message\":\"Usuário atualizado com sucesso\"}"
            );

        } catch (Exception e) {
            e.printStackTrace();

            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            resp.getWriter().write(
                    "{\"success\":false,\"message\":\"Erro ao atualizar usuário\"}"
            );
        }
    }
}