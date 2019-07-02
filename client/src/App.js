import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser,logoutUser,clearCurrentProfile} from './Actions/authAction'
import PrivateRoute from './components/common/PrivateRoute'
import store from './store';
import Landing from './components/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Navbar from './components/common/Navbar'
import PropertyDetails from './components/Property/PropertyDetail'
import AreaPropertyVasai from './components/Property/AreaPropertyVasai'
import AreaPropertyNallasopara from './components/Property/AreaPropertyNallasopara'
import AreaPropertyVirar from './components/Property/AreaPropertyVirar'
import AddProperty from './components/Property/AddProperty'
import './App.css';

if(localStorage.jwtToken) {

  setAuthToken(localStorage.jwtToken)

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile())
    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends React.Component {
  render() {  
   return (
     <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component= {Landing} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/propertydetail" component={PropertyDetails} />
          <Route exact path="/AreaProperty/Vasai" component={AreaPropertyVasai} />
          <Route exact path="/AreaProperty/Nallasopara" component={AreaPropertyNallasopara} />
          <Route exact path="/AreaProperty/Virar" component={AreaPropertyVirar} />
          <PrivateRoute exact path="/AddProperty" component={AddProperty} />
        </div>
        </Router>
    </Provider>
  );
 }
}

export default App;
