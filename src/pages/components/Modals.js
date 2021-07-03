import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeoldpassword = this.onChangeoldpassword.bind(this);
    this.onChangenewpassword=this.onChangenewpassword.bind(this);
   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      oldpassword: '',
      newpassword:'',
   

      
      customer:[]
      
      
    }
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeoldpassword(e) {
    this.setState({
      oldpassword: e.target.value
    })
  }
  onChangenewpassword(e) {
    this.setState({
      newpassword: e.target.value
    })
  }
  


 
 
  
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      email: this.state.email,
      oldpassword: this.state.oldpassword,
      newpassword: this.state.newpassword,
      
     
      

    }


    axios.post('https://carrombackend.herokuapp.com/admin/changepassword', customer)
      .then(res =>{
        if(res.data.message==="password change successful")
        {
          window.location="/"
        }
      } )
        
      
  }

  render() {
    return (
    <div style={{marginTop:"100px"}}>
      <h3 style={{}}>Create New Password </h3>
      <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{width:"450px"}} > 
          <label style={{}}>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <br/>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Old Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.oldpassword}
              onChange={this.onChangeoldpassword}
              />
        </div>
        <br/>
        <div className="form-group" style={{width:"450px"}}>
          <label>New Password </label>
          <input 
              type="password" 
              className="form-control"
              value={this.state.newpassword}
              onChange={this.onChangenewpassword}
              />
        </div>
       <br/>
       
       
        <div className="form-group" style={{}}>
          <input type="submit" value="Change  password" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}