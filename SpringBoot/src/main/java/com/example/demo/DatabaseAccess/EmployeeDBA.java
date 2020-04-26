package com.example.demo.DatabaseAccess;
import java.util.Collection;

import com.example.demo.Entity.Employee;

public interface EmployeeDBA {
    Collection<Employee> getAllEmployees();

    Employee getEmployeeById(int id);

    void removeEmployeeById(int id);

    void updateEmployee(Employee employee);

    void insertEmployeeToDb(Employee employee);
}