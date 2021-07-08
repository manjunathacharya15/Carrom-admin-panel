import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
// import Datetime from "react-datetime";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        this.onChangetime = this.onChangetime.bind(this);
        this.onChangedate= this.onChangedate.bind(this);
        this.onChangewinningamount = this.onChangewinningamount.bind(this);
        this.onChangenumberofwinners= this.onChangenumberofwinners.bind(this);
        this.onChangepercentage = this.onChangepercentage.bind(this);
       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            time: '',
            date:'',
         winningamount:'',
         numnberofwinners:'',
         percentage:'',
         
            trainer:[]
            
            
          }
        }
        onChangetime(e) {
            this.setState({
              time: e.target.value
            })
          }
          onChangedate(e) {
            this.setState({
              date: e.target.value
            })
          }
          onChangewinningamount(e) {
            this.setState({
              winningamount: e.target.value
            })
          }
          onChangenumberofwinners(e) {
            this.setState({
              numnberofwinners: e.target.value
            })
          }
          onChangepercentage(e) {
            this.setState({
              percentage: e.target.value
            })
          }
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
              time: this.state.time,
              date: this.state.date,
              winningamount:this.state.winningamount,
              numnberofwinners:this.state.numnberofwinners,
              percentage:this.state.percentage
             

        
            }
        
            
        
            axios.post('https://carrombackend.herokuapp.com/tournaments/add', trainer)
            .then(function(response){
        
              if(response.data ==='Tournament added!'){
                alert("successfully added tournament")
                  window.location='/#/dashboard/overview'
              }
             }) 
          }
        
    render(){
        return(
            <div style={{marginTop:"50px"}}>
              <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Tournament Information</h5>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> Time</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.time}
              onChange={this.onChangetime} />
              </Form.Group>
            </Col>
            
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Date</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.date}
              onChange={this.onChangedate} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
   
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Winning Amount</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.winningamount}
              onChange={this.onChangewinningamount} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Number Of Winniers</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.numnberofwinners}
              onChange={this.onChangenumberofwinners} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="percenta">
                <Form.Label>Percentage</Form.Label>
                <Form.Control required type="number" placeholder="" value={this.state.percentage}
              onChange={this.onChangepercentage} />
              </Form.Group>
            </Col>
          </Row>

          
          <div className="mt-3">
            <Button variant="primary" type="submit">Save </Button>
          
          </div>
        
        </Form>
        <div className="mt-3">
            <Button variant="primary" type="submit" onClick={this.onback}>Back</Button>
          
          </div>
      </Card.Body>
    </Card>
                
            </div>
        )
    }
}