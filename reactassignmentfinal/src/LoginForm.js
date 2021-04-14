import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './styles.css';

export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state={
            username:"",
            password:"",
            loggedIn: false,
           
        }
        
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

onChange(e) {
    this.setState({
            [e.target.name]: e.target.value
    })
}

submitForm(e) {
    e.preventDefault()
    const{username, password} = this.state
   
    if(password.length<8)
    {
      alert("password must be 8 character long")
    }

    if(username === "bhagyashree.srivastava@daffodilsw.com" && password === "Hrhk@1234") {
    
      localStorage.setItem("token", "jkcanjhbjkbsdkjkcajnd")        
      this.setState({
        
                loggedIn: true
              })

            }

      else
      {
        alert("chek the details first");

        
      }

}


  render() {
    if (this.state.loggedIn){
     return <Redirect to="/User"/>
   
  
    }
   
    return (
      <>
      <h1> Validated Login Form </h1>
      <div class="login">
            
        <form onSubmit={this.submitForm} className="for">
            <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} required /> &nbsp;
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}required/> &nbsp;
            <input type="submit" value="Login" />  
        </form>
     
      </div>
      </>
    )
  }
}
