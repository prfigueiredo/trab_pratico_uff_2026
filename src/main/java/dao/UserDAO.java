package dao;

import model.User;
import util.DBConnection;
import java.sql.*;

public class UserDAO {

    public void save(User user) throws Exception {
        String sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";
        try (Connection conn = DBConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, user.getName());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.executeUpdate();
        }
    }

    public User findByEmail(String email) throws Exception {
        String sql = "SELECT * FROM users WHERE email = ?";
        try (Connection conn = DBConnection.getConnection();
                PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                User user = new User();
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                return user;
            }
        }
        return null;
    }

    public void update(User user) throws Exception {
        String sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

        try (Connection conn = DBConnection.getConnection();
                PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, user.getName());
            stmt.setString(2, user.getEmail());
            stmt.setString(3, user.getPassword());
            stmt.setInt(4, user.getId());

            stmt.executeUpdate();
        }
    }

    public java.util.List<User> findAll() throws Exception {

        java.util.List<User> users = new java.util.ArrayList<>();

        String sql = "SELECT * FROM users";

        try (Connection conn = DBConnection.getConnection();
                PreparedStatement stmt = conn.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {

                User user = new User();

                user.setId(rs.getInt("id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));

                users.add(user);
            }
        }

        return users;
    }
}