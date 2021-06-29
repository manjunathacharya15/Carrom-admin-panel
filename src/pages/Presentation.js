
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";
import { Component } from "react";


export default class Presentation extends Component {
  constructor(props) {
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    
    
      
      
    }
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const admin = {
      email: this.state.email,
      password: this.state.password,
     
    }

    

    axios.post('https://r24hkart.herokuapp.com/admin/login', admin)
      .then(function(response){
        if(response.data.Code === 'Su')
        {
          window.location="/dash"
        }
        else if(response.data.Code === 'Fa')
        {
          window.location="/"
        }
      

      })
      .catch(function(error){
        window.location="/"


      })
      this.setState({
        email:'',
        password:''
      })
      
  }

  render(){
    return (
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            {/* <p className="text-center">
              <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
              </Card.Link>
            </p> */}
            <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
              <Col xs={12} className="d-flex align-items-center justify-content-center">
                <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Sign in to our platform</h3>
                  </div>
                  <Form className="mt-4" onSubmit={this.onSubmit}>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                        
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control autoFocus required type="email" placeholder="example@company.com" value={this.state.email} onChange={this.onChangeemail} />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.Group id="password" className="mb-4">
                        <Form.Label>Your Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control required type="password" placeholder="Password" value={this.state.password} onChange={this.onChangepassword} />
                        </InputGroup>
                      </Form.Group>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check type="checkbox">
                          <FormCheck.Input id="defaultCheck5" className="me-2" />
                          <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                        </Form.Check>
                        <Card.Link as={Link} to={Routes.ForgotPassword.path} className="small text-end">Forgot Password?</Card.Link>
                      </div>
                    </Form.Group>
                    <Link to="/dashboard/overview"><Button variant="primary" type="submit" className="w-100">
                      Sign in
                    </Button></Link>
                  </Form>
  
                 
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );

  }
}
 
