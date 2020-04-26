package com.example.demo.dba;

import com.example.demo.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.List;

@Repository("mysql")
public class MySqlEmployeeDBA implements EmployeeDBA {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private static class EmployeeRowMapper implements RowMapper<Employee> {

        @Override
        public Employee mapRow(ResultSet resultSet, int i) throws SQLException {
            Employee employee = new Employee();
            employee.setId(resultSet.getInt("id"));
            employee.setFirstName(resultSet.getString("first_name"));
            employee.setLastName(resultSet.getString("last_name"));
            
            return employee;
        }
    }

    @Override
    public Collection<Employee> getAllEmployees() {
        // SELECT column_name(s) FROM table_name
        final String sql = "SELECT id, first_name, last_name FROM employee_info";
        List<Employee> employee = jdbcTemplate.query(sql, new EmployeeRowMapper());
        return employee;
    }

    @Override
    public Employee getEmployeeById(int id) {
        // SELECT column_name(s) FROM table_name where column = value
        final String sql = "SELECT id, first_name, last_name, email_address, address, ssn, gender, start_date, team, annual_salary "
        						+ "FROM employee_info "
        						+ "where id = ?";
        Employee employee = jdbcTemplate.queryForObject(sql, new EmployeeRowMapper(), id);
        return employee;
    }

    @Override
    public void removeEmployeeById(int id) {
        // DELETE FROM table_name
        // WHERE some_column = some_value
        final String sql = "DELETE FROM employee_info WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }

    @Override
    public void updateEmployee(Employee employee) {
        // UPDATE table_name
        // SET column1=value, column2=value2,...
        // WHERE some_column=some_value
        final String sql = "UPDATE employee_info SET first_name = ?, last_name = ? WHERE id = ?";
        final int id = employee.getId();
        final String firstname = employee.getFirstName();
        final String lastname = employee.getLastName();
        jdbcTemplate.update(sql, new Object[]{firstname, lastname, id});
    }

    @Override
    public void insertEmployeeToDb(Employee employee) {
        // INSERT INTO table_name (column1, column2, column3,...)
        // VALUES (value1, value2, value3,...)
        final String sql = "INSERT INTO students (first_name, last_name) VALUES (?, ?)";
        final String firstname = employee.getFirstName();
        final String lastname = employee.getLastName();
        jdbcTemplate.update(sql, new Object[]{firstname, lastname});

    }
}