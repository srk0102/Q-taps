
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Cookies from "universal-cookie";
import Login from "./components/login"
import SignUp from "./components/signUp"
import Landing from "./components/landing"
import Dashboard from "./components/dashboard"
import Trending from "./components/trending"
import MyBooks from "./components/mybooks"
import Profile from "./components/profile"
import TopBar from "./components/navbar"
import Test from "./components/test"
import "./all.css"
// const cookies = new Cookies();

const AppContainer = ({ common, isFetchingAgencyAttr, user, agencyTheme }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState(""); 

  
  // const roleDetails = (data) => {
  //   const success = (data) => {
  //     console.log("user details", data);
  //     setRole(data.agency_role_id);
  //   };
  //   const failure = (err) => {
  //     console.log(err);
  //   };
  //   AgencyController.agencyUserDetails(
  //     data.agency_id,
  //     data.user_id,
  //     data.access_token,
  //     success,
  //     failure
  //   );
  // };

  
  function renderPage(Component, name) {
    if(name==='notLoginned'){
      return(<>
       
        <Component />
        </> )
    }else{
      return(<>
    <TopBar/> 
    <Component />
    </> )
    }
    
  }

  return (
    <div className="app" style={{backgroundColor: '#121212',color:"white"}}>
      
      <Router>
        <Switch>
          <Route
            exact
            path = "/"
            render ={() => renderPage(Landing, "notLoginned")}
          />
          <Route
            exact
            path="/login"
            render={() => renderPage(Login, "notLoginned")}
          />
          <Route
            exact
            path="/sign-up"
            render={() => renderPage(SignUp, "notLoginned")}
          />
          <Route
          exact
          path="/dashboard"
          render={() => renderPage(Dashboard)}
          />
          <Route
          exact
          path="/trending"
          render={() => renderPage(Trending)}
          />
          <Route
          exact
          path="/mybooks"
          render={() => renderPage(MyBooks)}
          />
          <Route
          exact
          path="/profile"
          render={() => renderPage(Profile)}
          />
          <Route
          exact
          path="/test"
          render={() => renderPage(Test)}
          />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    common: state.common,
    // isFetchingAgencyAttr: state.agency.isFetchingAgencyAttr,
    // user: state.user.agencyDetails,
    // agencyTheme: state.user.agencyTheme.agency_theme,
  };
};

const App = connect(mapStateToProps)(AppContainer);
export default App;
