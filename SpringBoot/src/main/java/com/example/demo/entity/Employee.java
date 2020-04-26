package com.example.demo.entity;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String first_name;
	private String last_name;
	private String email_address;
	private String address;
	private int ssn;
	private String gender;
	private Date start_date;
	private String team;
	private int annual_salary;
	
	public Employee() {}
	public Employee (int id, String first_name, String last_name, String email_address,
						String address, int ssn, String gender, Date start_date, String team, int annual_salary) {
		this.id= id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_address = email_address;
		this.address = address;
		this.ssn = ssn;
		this.start_date = start_date;
		this.annual_salary = annual_salary;
	}
	
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return this.first_name;
	}
	public void setFirstName(String first_name) {
		this.first_name = first_name;
	}
	public String getLastName() {
		return this.last_name;
	}
	public void setLastName(String last_name) {
		this.last_name = last_name;
	}
	public String getEmailAddress() {
		return this.email_address;
	}
	public void setEmailAddress(String email_address) {
		this.email_address = email_address;
	}
	public String getAddress() {
		return this.address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getSSN() {
		return this.ssn;
	}
	public void setSSN(int ssn) {
		this.ssn = ssn;
	}
	public String getGender() {
		return this.gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getStartDate() {
		return this.start_date;
	}
	public void setStartDate(Date start_date) {
		this.start_date = start_date;
	}
	public String getTeam() {
		return this.team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
	public int getAnnualSalary() {
		return this.annual_salary;
	}
	public void setAnnualSalary(int annual_salary) {
		this.annual_salary = annual_salary;
	}
}

