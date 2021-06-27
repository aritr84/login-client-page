import React from "react"
import Signup from "./Signup";
import {Container} from "react-bootstrap"
import {AuthProvider} from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {

  return (
  
    <Container className="d-flex align-items-center justify-content-flex mt-5 main-container"
    style={{minHeignt:"100vh"}}>

    <div className="nav-bar">
      <div className="brand">SYN Mail</div>
      <div class="nav-item">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item">History</a>
      </div>
      <div>
        <button className="nav-menu login">Log In</button>
        <button className="nav-menu signup">Sign Up</button>
      </div>
    </div>

      <div className="w-100">

        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>

              
            </Switch>
          </AuthProvider>
        </Router>

        <div class = "img-boy"></div>
        
        </div>
        
    </Container>
    


  )
}

export default App;
