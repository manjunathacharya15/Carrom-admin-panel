import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
export default class Adduser extends Component{
    constructor(props) {
        super(props);
    
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangephonenumber = this.onChangephonenumber.bind(this);
        this.onChangegender= this.onChangegender.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
         phonenumber:'',
         gender:'',
         password:'',
         
            trainer:[]
            
            
          }
        }
        onChangename(e) {
            this.setState({
              name: e.target.value
            })
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
          onChangephonenumber(e) {
            this.setState({
              phonenumber: e.target.value
            })
          }
          onChangegender(e) {
            this.setState({
              gender: e.target.value
            })
          }
          onback(){
            window.location='/#/components/buttons'
            }
     
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
              name: this.state.name,
              email: this.state.email,
              password:this.state.password,
              phonenumber:this.state.phonenumber,
              gender:this.state.gender
             

        
            }
        
            console.log(trainer);
        
            axios.post('https://carrombackend.herokuapp.com/users/signup', trainer)
            .then(function(response){
        
              if(response.data.returnCode ==='Success'){
                  window.location='/#/components/buttons'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">User information</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your  name" value={this.state.name}
              onChange={this.onChangename} />
              </Form.Group>
            </Col>
            
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control required type="text" placeholder="Gender" value={this.state.gender}
              onChange={this.onChangegender} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
   
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="" value={this.state.password}
              onChange={this.onChangepassword} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="number" placeholder="0123456789" value={this.state.phonenumber}
              onChange={this.onChangephonenumber} />
              </Form.Group>
            </Col>
          </Row>

          
          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          
          </div>
        
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit" onClick={this.onback}>back</Button>
          
          </div>
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}