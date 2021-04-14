import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter ,Route, Switch } from "react-router-dom";
import "./styles.css";
//import ValidatedLoginForm from "./ValidatedLoginForm";
 import LoginForm from './LoginForm';
import  User from './component/User';
 import { Provider } from "react-redux";
import store from "./store";
import Firstcomponent from './component/Firstcomponent';




function App() {
  return (
    
    <Switch>
    <Route exact path="/" component={LoginForm}/>
    <Route path="/user" component={ User }/>
    <Route path="/notes" component={Firstcomponent}/>
      </Switch>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <Provider store={store}>
<BrowserRouter >
 
<App />

</BrowserRouter>
</Provider>, rootElement);
