import React from 'react';
import './Signin.css';
class Signin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      SignInEmail: '',
      SignInPassword: '',
    }
  }
  onEmailChange = (event) => {
    this.setState({SignInEmail : event.target.value})
  }
  onPasswordChange = (event)=>{
    this.setState({SignInPassword : event.target.value})
  }
  onSubmitSignIn = () =>{
    fetch('http://localhost:3000/signin',{
      method: 'post',
      header: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        email : this.state.SignInEmail,
        password : this.state.SignInPassword
      })
    })
    this.props.onRouteChange('home');
  }
    render(){
      const  { onRouteChange } = this.props;
      return(
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80 zaxis">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 center">Face Detect</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                onChange = {this.onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                onChange = {this.onPasswordChange} 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" name="password"  id="password"
                />
              </div>
              
            </fieldset> 
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
                onClick ={this.onSubmitSignIn}
              />
              
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db"
              onClick = {()=> onRouteChange('register')}
              >Register</a>
            </div>
          </form>
        </main> 
        </article>
      );
    }
  }


export default Signin;