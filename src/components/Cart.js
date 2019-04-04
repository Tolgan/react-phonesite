import React, { Component } from 'react'
import Details from "./details.js"
import {Consumer} from "./context"
import CartColumn from "./CartColumn.js"
import ColumnTitles from "./ColumnTitles"
export default class Cart extends Component {
  render() {
    return (
   
           

<Consumer> 
{value=>{ if(value.cart.length>0)  return (
  
 <section>
  <ColumnTitles />
{value.cart.map(item=> <CartColumn item={item} title={item.title} key={item.id} increase={()=>value.increase(item.id)}  
decrease={()=>value.decrease(item.id)} remove={()=>value.remove(item.id)}  />)}
<div className="row mx-auto">
<button className="btn px-5 py-2 clear mt-5 mx-auto text-center" onClick={value.clear}>
<strong>Clear All</strong></button> 
</div> 
<h1 className="text-title text-right mt-2 mr-3">SUM:{value.carttotal} $  </h1>
</section>  )         
  else  { return <div className="col-lg-10 mx-auto text-center my-5">
<h1> YOUR CART IS EMPTY </h1>

</div>
        }
  
  
   }} 



          
        
        </Consumer>
    )
  }
}
