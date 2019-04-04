import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import './index.scss';
import Products from "./components/Products.js"
import Navbar from "./components/Navbar.js"
import Cart from "./components/Cart.js"
import Default from "./components/default.js"
import Specificdetail from "./components/specificdetail.js"
import Modal from "./components/modal.js"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Route path="/" component={Navbar} />
      <Switch>
     
  
     <Route exact path="/" component={Products} />
       <Route path="/details" component={Specificdetail} />
      <Route path="/card" component={Cart} />
      <Route component={Default} />   
</Switch>
<Modal />
     </BrowserRouter>
    );
  }
}

export default App;
