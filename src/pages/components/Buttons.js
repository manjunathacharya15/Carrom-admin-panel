import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';




export default class buttons extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://carrombackend.herokuapp.com/users/')
    .then(response => {
      
      this.setState({ customers: response.data})
      
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            name : e.name,
          
            email:e.email,
            phonenumber:e.phonenumber,
            gender:e.gender

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
   
    axios.post('https://carrombackend.herokuapp.com/users/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    
  };
  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      name: this.state.name
    }
    axios.post('https://carrombackend.herokuapp.com/users/search', customer)
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
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
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
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.name}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.email}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.gender}</td>
      
      <td style={{border:"1px double black",textAlign:"center"}}>{currentcustomer.phonenumber}</td>
      
    
    </tr>
     
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      <div style={{marginTop:"50px"}}>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b>User Details</b></h4></div>
    <div style={{marginTop:"5px"}}>
    
        
       
        </div>
    
    <div style={{width:"9%"}}><Link to="/components/breadcrumbs" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success"><AddIcon/></button></Link></div>
    
<div style={{width:"28%"}}  >
    <button style={{height:"28",marginTop:"8px"}}
        className="btn btn-danger "
        onClick={() => {
          this.deleteCustomerByIds();
        }}
      >
    <DeleteIcon />
      </button>
    </div>
</div>

        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table">
          <thead className="thead-light">
            <tr>
           
            <th style={{border:"1px double  black",width:"100px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Delete</th>
              <th style={{border:"1px double black",width:"150px" ,backgroundColor:"00ADB5",color:"black",textAlign:"center"}}> Name</th>

              <th style={{border:"1px double black",width:"150px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Email</th>
             
              <th style={{border:"1px double black",width:"30px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Gender</th>
              
              
              <th style={{border:"1px double black",width:"70px",backgroundColor:"00ADB5",color:"black",textAlign:"center"}}>Phone Number</th>
              
           
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
