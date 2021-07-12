import React,{Component} from "react"
import axios from 'axios';
// import moment from "moment-timezone";
import DatePicker from 'react-datepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button} from '@themesberg/react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
// import moment from "moment";

export default class Accordion extends Component{
    constructor(props) {
        super(props);
    
        
        this.onChangewinningamount = this.onChangewinningamount.bind(this);
        this.onChangenumberofwinners= this.onChangenumberofwinners.bind(this);
        this.onChangepercentage = this.onChangepercentage.bind(this);
        this.handlestartChange=this.handlestartChange.bind(this);
        this.handleendChange=this.handleendChange.bind(this);
        this.onChangeentryfee = this.onChangeentryfee.bind(this);
      
       
        


       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          startDate:new Date(),
          endDate:new Date(),
         entryfee:'',
         winningamount:'',
         numnberofwinners:'',
         percentage:'',
         
            trainer:[]
            
            
          }
        }
        
        onChangeentryfee(e) {
          this.setState({
            entryfee: e.target.value
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
          handlestartChange(date) {
            this.setState({
              startDate: date
            })
          }
          handleendChange(date) {
            this.setState({
              endDate: date
            })
          }
        
          
          
          
          onback(){
            window.location='/#/dashboard/overview'
            }
     
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
              startdate: this.state.startDate,
              enddate: this.state.endDate,
              winningamount:this.state.winningamount,
              numnberofwinners:this.state.numnberofwinners,
              percentage:this.state.percentage,
              entryfee:this.state.entryfee
             

        
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
                <Form.Label> Start Date and Time</Form.Label>
               
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <DatePicker
             selected={this.state.startDate}
             onChange={this.handlestartChange}
             name="startDate"
             timeFormat="HH:mm"
             showTimeSelect
             timeCaption="time"
             dateFormat="MMMM d, yyyy h:mm aa"
            />
        
            </Col>
            

            
            
          </Row>
          <Row className="align-items-center">
          <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label> End Date and Time</Form.Label>
               
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <DatePicker
             selected={this.state.endDate}
             onChange={this.handleendChange}
             name="endDate"
             timeFormat="HH:mm"
             showTimeSelect
             timeIntervals={15}
             timeCaption="time"
             dateFormat="MMMM d, yyyy h:mm aa"
            />
            </Col>
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Entry Fee</Form.Label>
                <Form.Control required type="text" placeholder="" value={this.state.entryfee}
              onChange={this.onChangeentryfee} />
              </Form.Group>
              </Col>
         
             
            </Row>
            <Row>
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
            <h6>Winning Amount</h6>
<div style={{border:"2px solid",width:"20%"}}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount1</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}}        type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount2</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount3</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount4</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount5</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount6</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount7</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount8</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount9</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{marginLeft:"50px"}}>Amount10</Form.Label>
                <Form.Control required style={{width:"100px",marginLeft:"40px"}} type="email" placeholder="" value={this.state.email}
              onChange={this.onChangeemail} />
              </Form.Group>
            </Col>
            </Row>
            </div>
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