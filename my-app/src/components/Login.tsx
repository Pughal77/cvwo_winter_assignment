import React, { useState } from 'react'
import { User } from '../interface';

type LoginProps = {
    LoggedIn:Boolean,
    setLoggedIn:React.Dispatch<React.SetStateAction<boolean>>,
    User:User,
    setUser:React.Dispatch<React.SetStateAction<User>>
}

const Login = (props: LoginProps) => {
    const [UserName, setUserName] = useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(e.target.value);
    };
    const onSubmit = () =>{
        props.setUser({UserName:UserName});
        props.setLoggedIn(true);
    };
  return (
    <div>
        Login
        <br />
          username:
          <input type="text" value={UserName} onChange={(e)=>onChange(e)}/>
          <button onSubmit={()=>onSubmit}>submit</button>
      </div>
  )
}

export default Login