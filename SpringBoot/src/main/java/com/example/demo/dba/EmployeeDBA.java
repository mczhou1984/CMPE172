package com.example.demo.dba;
import com.example.demo.entity.Employee;
import java.util.Collection;

public interface EmployeeDBA {
    Collection<Employee> getAllEmployees();

    Employee getEmployeeById(int id);

    void removeEmployeeById(int id);

    void updateEmployee(Employee employee);

    void insertEmployeeToDb(Employee employee);
}