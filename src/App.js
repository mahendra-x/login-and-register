import { useState } from "react";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";


function App() {
  const [user, setLoginUser] = useState(true);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} user={user}/> : <Login setLoginUser={setLoginUser}/>
            }
            
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
      {/* <Homepage /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
