package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.demo.DatabaseAccess.EmployeeDBA;
import com.example.demo.Entity.Employee;

import java.util.Collection;

@Service
public class EmployeeService {
	 @Autowired
	    @Qualifier("mysql")
	    private EmployeeDBA employeeDBA;

	    public Collection<Employee> getAllEmployees(){
	        return this.employeeDBA.getAllEmployees();
	    }

	    public Employee getEmployeeById(int id){
	        return this.employeeDBA.getEmployeeById(id);
	    }

	    public void removeEmployeeById(int id) {
	        this.employeeDBA.removeEmployeeById(id);
	    }

	    public void updateEmployee(Employee employee){
	        this.employeeDBA.updateEmployee(employee);
	    }

	    public void insertEmployee(Employee employee) {
	        this.employeeDBA.insertEmployeeToDb(employee);
	    }
	}