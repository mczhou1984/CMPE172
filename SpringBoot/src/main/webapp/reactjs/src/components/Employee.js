import React, {Component} from 'react'
import {Card, Form, Button} from 'react-bootstrap';

export default class Employee extends Component {

  constructor(props) {
    super(props);
    this.state ={first_name:'', last_name:'', email_address:'', address:'',
                ssn:'', gender:'', start_date:'', team:'', annual_salary:''};
    this.employeeChange = this.employeeChange.bind(this);
    this.submitEmployee = this.submitEmployee.bind(this);
  }

  submitEmployee(event) {
    alert('First Name: ' + this.state.first_name+', Last Name: '+ this.state.last_name+
          ', Email Address: ' + this.state.email_address+', Address: '+ this.state.address+
          ', SSN: '+ this.state.ssn+', Gender: '+ this.state.gender+', Start Date: ' + this.state.start_date+
          ', Team: '+ this.state.team+', Annual Salary: '+ this.state.annual_salary);
    event.preventDefault();
  }

  employeeChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Add Employee</Card.Header>
              <Form onSubmit={this.submitEmployee} id="employeeFormId">
                  <Card.Body>
                    <Form.Row>
                        <Form.Group controlID="formGridFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control required
                            type="text" name="first_name"
                            value={this.state.first_name}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter First Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control required
                            type="text" name="last_name"
                            value={this.state.last_name}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Last Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control required
                            type="text" name="email_address"
                            value={this.state.email_address}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Email Address"/>
                        </Form.Group>
                        <Form.Group controlID="formGridAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control required
                            type="text" name="address"
                            value={this.state.address}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Address"/>
                        </Form.Group>
                        <Form.Group controlID="formGridSSN">
                          <Form.Label>SSN</Form.Label>
                          <Form.Control required
                            type="text" name="ssn"
                            value={this.state.ssn}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Employee's SSN"/>
                        </Form.Group>
                        <Form.Group controlID="formGridGender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control required
                            type="text" name="gender"
                            value={this.state.gender}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Employee's Gender"/>
                        </Form.Group>
                        <Form.Group controlID="formGridStartDate">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control required
                            type="text" name="start_date"
                            value={this.state.start_date}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="MM/DD/YYYY"/>
                        </Form.Group>
                        <Form.Group controlID="formGridTeam">
                          <Form.Label>Team</Form.Label>
                          <Form.Control required
                            type="text" name="team"
                            value={this.state.team}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Team Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridAnnualSalary">
                          <Form.Label>Annual Salary</Form.Label>
                          <Form.Control required
                            type="text" name="annual_salary"
                            value={this.state.annual_salary}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Annual Salary"/>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                </Card.Footer>
            </Form>

      </Card>
    );

  }


}
