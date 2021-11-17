import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

import Local from './helpers/Local';
import Api from './helpers/Api';


import Navbar from './components/Navbar';
import Routes from './components/Routes';



function App() {
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const history = useHistory();

  // applies POST method from ./helpers/Api.js
  // saves user token into local storage
  async function doLogin(username, password) {
    let response = await Api.loginUser(username, password);
    if (response.ok) {
        Local.saveUserInfo(response.data.token, response.data.user);
        setUser(response.data.user);
        setLoginErrorMsg('');
        history.push('/');
    } else {
        setLoginErrorMsg('Login failed');
    }
}

//logs out user by "forgetting" the token
function doLogout() {
  Local.removeUserInfo();
  setUser(null);
  history.push('/');
}



function addUser(newUser) {
  // add new user to database
  fetch('/teachme', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
    body: JSON.stringify(users),
  })
    .then(response => response.json())
    .then(users => {
      setUsers(users);
    })
    // Redirect to /users
    history.push('/teachme');
}
const getUsers = () => {
  fetch('/students')
    .then(response => response.json())
    .then(users => {
      console.log(users);
      setUsers(users);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
      <div className="App">
        <h1>Teach Me</h1>

          <Navbar user={user} logoutCb={doLogout}/>
          <Routes loginCb={(u, p) => doLogin(u, p)}
                  loginError={loginErrorMsg}
                  users={users} addUserCb={name => addUser(name)} />
    
      </div>
      )
}

export default App;








