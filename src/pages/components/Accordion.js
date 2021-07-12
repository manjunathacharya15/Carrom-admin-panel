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
        this.onChangeamount1 = this.onChangeamount1.bind(this);
        this.onChangeamount2 = this.onChangeamount2.bind(this);
        this.onChangeamount3 = this.onChangeamount3.bind(this);
        this.onChangeamount4 = this.onChangeamount4.bind(this);
        this.onChangeamount5 = this.onChangeamount5.bind(this);
        this.onChangeamount6 = this.onChangeamount6.bind(this);
        this.onChangeamount7 = this.onChangeamount7.bind(this);
        this.onChangeamount8 = this.onChangeamount8.bind(this);
        this.onChangeamount9 = this.onChangeamount9.bind(this);
         this.onChangeamount10 = this.onChangeamount10.bind(this);
      
       
        


       

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          startDate:new Date(),
          endDate:new Date(),
         entryfee:'',
         winningamount:[],
         winning:[],
         numnberofwinners:'',
         percentage:'',
         amount1:'',
         amount2:'',
         amount3:'',
         amount4:'',
         amount5:'',
         amount6:'',
         amount7:'',
         amount8:'',
         amount9:'',
         amount10:'',
         
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
          onChangeamount1(e) {
            this.setState({
              amount1: e.target.value
            })
          }
          onChangeamount2(e) {
            this.setState({
              amount2: e.target.value
            })
          }
          onChangeamount3(e) {
            this.setState({
              amount3: e.target.value
            })
          }
          onChangeamount4(e) {
            this.setState({
              amount4: e.target.value
            })
          }
          onChangeamount5(e) {
            this.setState({
              amount5: e.target.value
            })
          }
          onChangeamount6(e) {
            this.setState({
              amount6: e.target.value
            })
          }
          onChangeamount7(e) {
            this.setState({
              amount7: e.target.value
            })
          }
          onChangeamount8(e) {
            this.setState({
              amount8: e.target.value
            })
          }
          onChangeamount9(e) {
            this.setState({
              amount9: e.target.value
            })
          }
          onChangeamount10(e) {
            this.setState({
              amount10: e.target.value
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
         
// this.state.winning={
//   amount1:this.state.amount1,
//   amount2:this.state.amount2,
//   amount3:this.state.amount3,
//   amount4:this.state.amount4,
//   amount5:this.state.amount5,
//   amount6:this.state.amount6,
//   amount7:this.state.amount7,
//   amount8:this.state.amount8,
//   amount9:this.state.amount9,
//   amount10:this.state.amount10,
  

// }
  this.state.winningamount=[this.state.amount1,this.state.amount2,this.state.amount3,this.state.amount4,this.state.amount5,this.state.amount6,this.state.amount7,this.state.amount8,this.state.amount9,this.state.amount10]
 
    
     
  
   
  

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
                <Form.Label style={{}}>Amount1</Form.Label>
                <Form.Control required style={{}}        type="number" placeholder="" value={this.state.amount1}
              onChange={this.onChangeamount1} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount2</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount2}
              onChange={this.onChangeamount2} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount3</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount3}
              onChange={this.onChangeamount3} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount4</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount4}
              onChange={this.onChangeamount4} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount5</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount5}
              onChange={this.onChangeamount5} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount6</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount6}
              onChange={this.onChangeamount6} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount7</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount7}
              onChange={this.onChangeamount7} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount8</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount8}
              onChange={this.onChangeamount8} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount9</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount9}
              onChange={this.onChangeamount9} />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group id="emal">
                <Form.Label style={{}}>Amount10</Form.Label>
                <Form.Control required style={{}} type="number" placeholder="" value={this.state.amount10}
              onChange={this.onChangeamount10} />
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