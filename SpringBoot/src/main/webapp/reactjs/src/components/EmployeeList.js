import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import axios from 'axios';
export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employees : []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/Employee")
          .then(response => response.data)
          .then(data =>{
              this.setState({employees: data});
          });
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header> Employee List</Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark">
                  <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Address</th>
                        <th>SSN</th>
                        <th>Gender</th>
                        <th>Start Date</th>
                        <th>Team</th>
                        <th>Annual Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          this.state.employees.length === 0 ?
                          <tr align="center">
                            <td colSpan="10">Employee Available.</td>
                          </tr> :
                          this.state.employees.map((employee) => (
                          <tr key={employee.id}>
                              <td>{employee.id}</td>
                              <td>{employee.firstName}</td>
                              <td>{employee.lastName}</td>
                              <td>{employee.emailAddress}</td>
                              <td>{employee.address}</td>
                              <td>{employee.ssn}</td>
                              <td>{employee.gender}</td>
                              <td>{employee.startDate}</td>
                              <td>{employee.team}</td>
                              <td>{employee.annualSalary}</td>

                          </tr>
                          ))
                    }
                    </tbody>
              </Table>

            </Card.Body>
      </Card>
    );

  }

}
