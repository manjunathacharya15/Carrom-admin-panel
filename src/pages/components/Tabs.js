import React, { Component } from 'react'
import {   faHome,  } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button,  Breadcrumb, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';



export default class Tabs extends Component {
  constructor(props) {
    super(props);

    
   

    
    this.state = {
        
     
     
        trainer:[]
        
        
      }
    }
    componentDidMount(){
      axios.post('https://carrombackend.herokuapp.com/admin/' )
      .then(response => {
        
        this.setState({ trainer: response.data})

        let result=response.data
        this.setState({trainer:
          result.map(e => {
            return{
              username:e.username,
              email:e.email
  
            }
          })
          
      })
      console.log(this.state)
      })
      .catch((error) => {
        console.log(error);
      })
  }

      
  render() {
    return (
      this.state.trainer.map(currentcust=>(
        <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Admin profile</Breadcrumb.Item>
          
          </Breadcrumb>
          <br/>
          <h4 style={{marginLeft:"500px"}}>Admin Details</h4>
          {/* <p className="mb-0">Payments information .</p> */}
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end" style={{marginRight:"200px"}}>
            
          </Col>
          </Row>
          </div>
          <div>
          <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4" style={{marginLeft:"40%"}}>Admin information</h5>
        <Form >
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label > Admin Name</Form.Label>
                <input  type="text"
             
              className="form-control"
              value={currentcust.username}
              
              />
              </Form.Group>
            </Col>
          
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Admin Gmail</Form.Label>
                <Form.Control required type="text" placeholder="" value={currentcust.email} />
              </Form.Group>
            </Col>
          </Row>
         

          
          
        
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit" onClick={this.onback}>back</Button>
          
          </div>
      </Card.Body>
    </Card>
          </div>
      </div>
      )
        )
     
    )
  }
}
