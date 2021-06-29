import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from '@material-ui/icons/SearchRounded';
import { Checkbox, Input } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';




export default class Userdetails extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstname:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('https://mitnessnew.herokuapp.com/customers/')
    .then(response => {
      
      this.setState({ customers: response.data})
      // console.log(this.state.customers);
      // this.setState.customers.map(d=>{
      //  return{
      //    select:false,
      //    id:d._id,
         

      //  }

       
        
      // })
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            firstname : e.firstname,
            lastname: e.lastname,
            email:e.email,
            phonenumber:e.phonenumber,
            gender:e.gender

          }
        })
        
    })
    console.log(this.state)
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
    // console.log(arrayids)
    axios.post('https://mitnessnew.herokuapp.com/customers/delete',{arrayids:arrayids})
   
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    ;
    // axios
    //   .delete('https://vast-river-32952.herokuapp.com/customers/')
    //   .then(data => {
    //     console.log(data);
    //     this.componentDidMount();
    //   })
      // .catch(err => alert(err));
  };
  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      firstname: this.state.firstname
    }
    axios.post('https://mitnessnew.herokuapp.com/customers/search', customer)
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
      if(a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
      if(a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
      return 0;
     })

    return this.state.customers.map(currentcustomer => (
      <tr>
        <td  style={{border:"1px double grey",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td>
      <td style={{border:"1px double grey",textAlign:"center"}}><Link to={"/userdetail/"+currentcustomer.id}>{currentcustomer.firstname}</Link></td>
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.lastname}</td>
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.email}</td>
      {/* <td style={{border:"3px double green"}}>{props.customer.role}</td> */}
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.gender}</td>
      {/* <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.age}</td> */}
      {/* <td style={{border:"3px double green"}}>{props.customer.weight}</td>
      <td style={{border:"3px double green"}}>{props.customer.height}</td>
      <td style={{border:"3px double green"}}>{props.customer.address}</td>
      <td style={{border:"3px double green"}}>{props.customer.currentplan}</td>
      <td style={{border:"3px double green"}}>{props.customer.nextrenewdate}</td>
      <td style={{border:"3px double green"}}>{props.customer.numberofexercises}</td>
      <td style={{border:"3px double green"}}>{props.customer.timedurationofallexercises}</td>
      <td style={{border:"3px double green"}}>{props.customer.totalcaloriesburnt}</td> */}
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.phonenumber}</td>
      
      {/* <td style={{border:"1px double grey",textAlign:"center"}}>
        <input type="checkbox"  /> <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a> 
      </td> */}
    </tr>
      // return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      <div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"70%"}}><h4><b>Customer</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="input-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
              <div className="input-group-apppend">
              <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
              </button>
              </div>
        </div>
        </form>
        
       
        </div>
    
    <div style={{width:"9%"}}><Link to="/welcome" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success"><AddIcon/></button></Link></div>
    
<div style={{width:"22%"}}  >
    <button style={{height:"25",marginTop:"8px"}}
        className="btn btn-danger "
        onClick={() => {
          this.deleteCustomerByIds();
        }}
      >
    <DeleteIcon/>
      </button>
    </div>
</div>

        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
       
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
            {/* <th>
            
              
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  this.setState(
                    this.state.customers.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th> */}
            <th style={{border:"1px double white",width:"100px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Delete</th>
              <th style={{border:"1px double white",width:"150px" ,backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>First Name</th>
              <th style={{border:"1px double white",width:"100px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Last Name</th>
              <th style={{border:"1px double white",width:"150px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Email</th>
              {/* <th style={{border:"3px double green"}}>Role</th> */}
              <th style={{border:"1px double white",width:"30px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Gender</th>
              {/* <th style={{border:"3px double green"}}>Weight</th>
              <th style={{border:"3px double green"}}>Height</th>
              <th style={{border:"3px double green"}}>Address</th>
              <th style={{border:"3px double green"}}>Current Plan</th>
              <th style={{border:"3px double green"}}>Next Renew Date</th>
              <th style={{border:"3px double green"}}>Number Of Exercises</th>
              <th style={{border:"3px double green"}}>Time Duration All Exercises</th>
              <th style={{border:"3px double green"}}>Total Calories Burnt</th> */} 
              <th style={{border:"1px double white",width:"70px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Phone Number</th>
              
           
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
