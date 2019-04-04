import React, { Component } from 'react'
import Details from "./details.js"
import {Consumer} from "./context"

export default class Products extends Component {
  
    
  
    render() { 
    return (
      
      <div className="container">
          <div className="row ">
         <div className="col-md-12 text-center mt-5">
          <h3> OUR PRODUCTS </h3>
          </div>

           <Consumer >            
      {value=> value.products.map(items => <Details key={items.id}  items={items} 
      addCart={()=>value.addToCart(items.id)} handleDetail={()=>value.handleDetail(items.id)} 
      />) }
 
</Consumer>


              
          </div>
      </div>

        



    
    )
  }
}
