import React, {Component} from 'react'
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';

export default class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.employeeChange = this.employeeChange.bind(this);
    this.submitEmployee = this.submitEmployee.bind(this);
  };

  initialState = {
    id:'', first_name:'', last_name:'', email_address:'', address:'',
    ssn:'', gender:'', start_date:'', team:'', annual_salary:''
  };

  componentDidMount() {
    const employeeId = +this.props.match.params.id;
    if(employeeId) {
      this.findEmployeeById(employeeId);
    }
  }

  findEmployeeById = (employeeId) => {
    axios.get("/api/"+employeeId)
        .then(response => {
            if(response.data != null) {
                this.setState({
                  id: response.data.id,
                  first_name: response.data.first_name,
                  last_name: response.data.last_name,
                  email_address: response.data.email_address,
                  address: response.data.address,
                  ssn: response.data.ssn,
                  gender: response.data.gender,
                  start_date: response.data.start_date,
                  team: response.data.team,
                  annual_salary: response.data.annual_salary
                });
            }
        }).catch((error) => {
            console.error("Error -" + error);
        });
  }

  submitEmployee = event => {
  event.preventDefault();

    const employee = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email_address: this.state.email_address,
        address: this.state.address,
        ssn: this.state.ssn,
        gender: this.state.gender,
        start_date: this.state.start_date,
        team: this.state.team,
        annual_salary: this.state.annual_salary
    };
        console.log(this.state.first_name);
        console.log(this.state.last_name);
        console.log(this.state.email_address);
        console.log(this.state.address);
        console.log(this.state.ssn);
        console.log(this.state.gender);
        console.log(this.state.start_date);
        console.log(this.state.team);
        console.log(this.state.annual_salary);
    axios.post("/api", employee)
        .then(response => {
            if(response.data != null) {
                this.setState(this.initialState);
                alert("Employee Saved Successfully");
            }
        });
   };

  employeeChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  };

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>
          <FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Employee" : " Add Employee"}</Card.Header>
              <Form onSubmit={this.submitEmployee} id="employeeFormId">
                  <Card.Body>
                    <Form.Row>
                        <Form.Group controlID="formGridFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="first_name"
                            value={this.state.first_name}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter First Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="last_name"
                            value={this.state.last_name}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Last Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="email_address"
                            value={this.state.email_address}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Email Address"/>
                        </Form.Group>
                        <Form.Group controlID="formGridAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="address"
                            value={this.state.address}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Address"/>
                        </Form.Group>
                        <Form.Group controlID="formGridSSN">
                          <Form.Label>SSN</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="ssn"
                            value={this.state.ssn}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Employee's SSN"/>
                        </Form.Group>
                        <Form.Group controlID="formGridGender">
                          <Form.Label>Gender</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="gender"
                            value={this.state.gender}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Employee's Gender"/>
                        </Form.Group>
                        <Form.Group controlID="formGridStartDate">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="start_date"
                            value={this.state.start_date}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="MM/DD/YYYY"/>
                        </Form.Group>
                        <Form.Group controlID="formGridTeam">
                          <Form.Label>Team</Form.Label>
                          <Form.Control required autoCompolete="off"
                            type="text" name="team"
                            value={this.state.team}
                            onChange={this.employeeChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Team Name"/>
                        </Form.Group>
                        <Form.Group controlID="formGridAnnualSalary">
                          <Form.Label>Annual Salary</Form.Label>
                          <Form.Control required autoCompolete="off"
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
                        <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Submit"}
                    </Button>{' '}

                </Card.Footer>
            </Form>

      </Card>
    );

  }


}
