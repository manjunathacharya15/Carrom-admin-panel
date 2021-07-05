
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import { Component } from "react";
import axios from "axios";
import { thisExpression } from "@babel/types";


export default class ResetPassword extends Component{
  constructor(props) {
    super(props);

    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeconfirmpassword = this.onChangeconfirmpassword.bind(this);


    
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      confirmpassword:'',
     

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
    axios.post('https://carrombackend.herokuapp.com/admin/')
    .then(response => {
      
      this.setState({ customer: response.data})
      let result=response.data
      this.setState({customer:
        result.map(e => {
          return{
           
            token : e.resetPasswordToken,
            

          }
         
        })
       
  })
  console.log(this.state.customer[0])

})
.catch((error) => {
  console.log(error);
})
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeconfirmpassword(e) {
    this.setState({
      confirmpassword: e.target.value
    })
  }
  

 
  


 
 
  
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      password:this.state.password,
     
      
    
      
     
      

    }
    if(this.state.password === this.state.confirmpassword){
      axios.post('https://carrombackend.herokuapp.com/admin/reset/' + this.state.customer[0], customer)
      .then(res => alert("password saved "));
    }
else
{
alert("password doesnot match") 
}
}
  render(){

  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Reset password</h3>
                <Form onSubmit={this.onSubmit}>
                 
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" onChange={this.onChangepassword}  />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" onChange={this.onChangeconfirmpassword}  />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Reset password
                  </Button>
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
