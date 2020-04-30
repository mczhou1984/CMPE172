import React from 'react';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';

function App() {
  const marginTop = {
    marginTop:"20px"
  };
  return (
    <Router>
        <NavigationBar/>
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
                <Switch>
                  <Route path="/" exact component = {Welcome}/>
                  <Route path="/add" exact component = {Employee}/>
                  <Route path="/edit/:id" exact component = {Employee}/>
                  <Route path="/list" exact component = {EmployeeList}/>
                </Switch>
              </Col>
            </Row>
        </Container>
    </Router>
  );
}

export default App;
