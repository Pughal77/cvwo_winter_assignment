import React, { Component,useState } from 'react'

type Props = {}

type LoginState = {
  userName:String,
  userlist:String[]
}
//declaring all the states here
const [userName, setuserName] = useState('');
const [userlist, setuserlist] = useState(["Pughal","Fikri","James","Joshua","Tarin"]);
const [error, seterror] = useState(false);

class Login extends Component<Props, LoginState> {
  LoginState = {
    userlist:userlist,
    userName:userName
  }
  HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (this.LoginState.userName in this.LoginState.userlist){
      //load home page
    } else {
      seterror(true);
    }
  }
  onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setuserName(e.target.value);
  };
  render() {
    return (
      <div>
        Login
        <br />
        <form onSubmit={this.HandleSubmit}>
          username:
          <input type="text" value={userName} onChange={this.onChange}/>
        </form>
        {error && <p>unauthorised user</p>}
      </div>
    )
  }
}

export default Login