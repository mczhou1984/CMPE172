package com.example.demo.DatabaseAccess;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Employee;

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
            employee.setEmailAddress(resultSet.getString("email_address"));
            employee.setAddress(resultSet.getString("address"));
            employee.setSSN(resultSet.getInt("ssn"));
            employee.setGender(resultSet.getString("gender"));
            employee.setTeam(resultSet.getString("team"));
            employee.setStartDate(resultSet.getString("start_date"));
            employee.setAnnualSalary(resultSet.getInt("annual_salary"));
            return employee;
        }
    }

    @Override
    public Collection<Employee> getAllEmployees() {
        // SELECT column_name(s) FROM table_name
        final String sql = "SELECT id, first_name, last_name, email_address, address, ssn, gender, start_date, "
        					+ "team, annual_salary FROM employee_info";
        List<Employee> employee = jdbcTemplate.query(sql, new EmployeeRowMapper());
        return employee;
    }

    @Override
    public Employee getEmployeeById(int id) {
        // SELECT column_name(s) FROM table_name where column = value
        final String sql = "SELECT id, first_name, last_name, email_address, address, ssn, gender, start_date, "
        						+ "team, annual_salary FROM employee_info "
        						+ "WHERE id = ?";
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
        final String sql = "UPDATE employee_info SET first_name = ?, last_name = ?, email_addres = ?, address = ?, "
        					+ " ssn = ?, gender = ? , start_date = ?, team = ? , annual_salary = ? WHERE id = ?";
        final int id = employee.getId();
        final String firstname = employee.getFirstName();
        final String lastname = employee.getLastName();
        final String email_address = employee.getEmailAddress();
        final String address = employee.getAddress();
        final int ssn = employee.getSSN();
        final String gender = employee.getGender();
        final String start_date = employee.getStartDate();
        final String team = employee.getTeam();
        final int annual_salary = employee.getAnnualSalary();
        jdbcTemplate.update(sql, new Object[]{id, firstname, lastname, email_address, address, ssn, gender, 
        										start_date, team, annual_salary});
    }

    @Override
    public void insertEmployeeToDb(Employee employee) {
        // INSERT INTO table_name (column1, column2, column3,...)
        // VALUES (value1, value2, value3,...)
        final String sql = "INSERT INTO employee_info (first_name, last_name, email_address, address,"
        					+ " ssn, gender, start_date, team, annual_salary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        final String firstname = employee.getFirstName();
        final String lastname = employee.getLastName();
        final String email_address = employee.getEmailAddress();
        final String address = employee.getAddress();
        final int ssn = employee.getSSN();
        final String gender = employee.getGender();
        final String start_date = employee.getStartDate();
        final String team = employee.getTeam();
        final int annual_salary = employee.getAnnualSalary();
        jdbcTemplate.update(sql, new Object[] {firstname, lastname, email_address, address, ssn, gender, 
        										start_date, team, annual_salary});
    }
    
}