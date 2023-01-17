import React ,{createContext,useReducer} from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Home from "./components/Home";
import About from "./components/About";
import Services from './components/Services';
import Shop from './components/Shop';
import Login from './components/Login';
import Signin from './components/Signin';
import Logout from './components/Logout';
import AddShop from './components/AddShop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {initialState,reducer} from "../src/reducer/UseReducer";
//context api 
export  const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
   
    <Route path="/About">
      <About />
    </Route>
    <Route path="/Shop">
      <Shop />
    </Route>
    <Route path="/Login">
      <Login />
    </Route>
    <Route path="/Signin">
      <Signin />
    </Route>
    <Route path="/Services">
      <Services />
    </Route>
      <Route path="/logout">
      <Logout />
    </Route> 
    <Route path="/Addshop">
      <AddShop />
    </Route>
    <Route path="/">
      <Home />
    </Route> 
  </Switch>

  )
}

const App=() => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   
    <div className="App">
      <UserContext.Provider value={{state,dispatch}} >
  <Router>

   <Navbar/>
    <Routing/>   
    </Router>
    </UserContext.Provider> 
  <Footer/>
    </div>
  );
}

export default App;
