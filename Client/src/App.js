 import { useState } from "react";
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
  
  return (
      <div className="App">
        <h6>Improve your English</h6>

          <Navbar user={user} logoutCb={doLogout}/>
          <Routes loginCb={(u, p) => doLogin(u, p)}
                  loginError={loginErrorMsg} />
    
      </div>
      )
}

export default App;







