import React,{Component} from "react"
import axios from 'axios';
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
                <h3 >Create users </h3>
                <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"  style={{width:"400px"}}> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
              />
        </div>
        <div className="form-group"  style={{width:"400px"}}> 
          <label>Email: </label>
          <input  type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group"  style={{width:"400px"}}> 
          <label>Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
              />
        </div>
        <div className="form-group"  style={{width:"400px"}}> 
          <label>Phone Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangephonenumber}
              />
        </div>
        <div className="form-group"  style={{width:"400px"}}> 
          <label>Gender: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
              />
        </div>
        <br/>
        <div className="form-group"  >
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      
      </form>
            </div>
        )
    }
}