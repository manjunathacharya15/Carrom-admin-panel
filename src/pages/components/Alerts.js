import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {  faCog, faHome, faSearch,faPlus,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangepaymentid = this.onChangepaymentid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      paymentid:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://carrombackend.herokuapp.com/payments/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            paymentmode : e.paymentmode,
          
            paymentid:e.paymentid,
            amount:e.amount,
          

          }
        })
        
    })
   
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
  deleteCustomerByIds = () => {
  const arrayids = [];
    this.state.customers.forEach(d => {
      if(d.select) { 
        arrayids.push(d.id);
      }
    });
   
    axios.post('https://carrombackend.herokuapp.com/payments/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangepaymentid(e) {
    this.setState({
      paymentid: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      paymentid: this.state.paymentid
    }
    axios.post('https://carrombackend.herokuapp.com/payments/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  deleteCustomer(id) {
    axios.delete('https://mitnessnew.herokuapp.com/customers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.paymentid.toLowerCase() < b.paymentid.toLowerCase()) return -1;
      if(a.paymentid.toLowerCase() > b.paymentid.toLowerCase()) return 1;
      return 0;
     })

    return this.state.customers.map(currentcustomer => (
      <tr>
        <td  style={{border:"1px double black",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td>
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.paymentmode}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.paymentid}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.amount}</td>
      
      
      
    
    </tr>
     
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      
      <div style={{marginTop:"50px"}}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Payments Details</Breadcrumb.Item>
          
          </Breadcrumb>
          <h4>Payments Details</h4>
          <p className="mb-0">Payments information .</p>
        </div>
      
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Form onSubmit={this.onSubmit}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" value={this.state.paymentid} onChange={this.onChangepaymentid} />
            </InputGroup>
            </Form>
          </Col>
          <Col xs={4} md={2} xl={1} className="ps-md-0 text-end" style={{marginRight:"200px"}}>
            <Dropdown as={ButtonGroup} >
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <b>Actions</b>
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
              
                {/* <Dropdown.Item className="d-flex fw-bold">
                <Link to="/components/breadcrumbs" className="nav-link">    <span className="icon icon-small ms-auto">Adduser <FontAwesomeIcon icon={faPlus} style={{marginLeft:"16px"}} /></span></Link>
                </Dropdown.Item> */}
                <Dropdown.Item className="fw-bold" >
                <span className="icon icon-small ms-auto" style={{marginRight:"50px"}}   onClick={() => {
          this.deleteCustomerByIds();
        }} >Delete <FontAwesomeIcon icon={faTrashAlt} style={{marginLeft:"5px"}} /> </span>
                </Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          </Row>
          </div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b></b></h4></div>
    <div style={{marginTop:"5px"}}>
    
        
       
        </div>
    
   
    

</div>

        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table">
          <thead className="thead-light">
            <tr>
           
            <th style={{border:"1px double  black",width:"100px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Delete</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Payment Mode</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Payment ID</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Amount</th>
              
              
              
           
            </tr>
            
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
         
        </table>
        </div>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}
