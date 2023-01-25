import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { User } from './interface';
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const NewUser:User = {
    UserName:''
  }
  const [User, setUser] = useState<User>(NewUser);
  return (
    <div className="App">
      {!LoggedIn && 
        <Login 
      LoggedIn={LoggedIn} 
      setLoggedIn={setLoggedIn} 
      setUser={setUser}
      User = {User}
        />}
      {LoggedIn && <Home User={User}/>}
    </div>
  );
}

export default App;
