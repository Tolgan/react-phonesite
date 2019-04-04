import React, { Component } from 'react'
import {Consumer} from "./context"
import {Link} from "react-router-dom"
export default class Specificdetail extends Component {
  render() {
    return (
      <Consumer>
      
   {value=>  { const {id,title,img,price,company,info,inCart}=value.detailProduct
   
return(
<div className="container py-5">
    <div className="row">
        <div className="col-md-6 mx-auto">
    
    
        <img src={img} alt="jpggg" className="img-fluid" />
    
        </div>
<div className="col-lg-6 text-capitalize">
 <h2>Model: {title}</h2>
<h4 className=" text-title text-uppercase text-muted" >Made By: {company}</h4>
<h4 className="text-primary">Price:${price}</h4>
<p className="mt-3 font-weight-bold">Product Info:<br/>
<span className="text-lead text-muted"> {info} </span></p>
<Link to="/" >

<button className="btn btn-primary">Back to Products </button>
</Link>
<button className="btn btn-warning ml-3" disabled={inCart?true:false  } 
onClick={()=>{value.addToCart(id)}}
 >{inCart? "In Cart" : "Add to CArt"}
 </button> 


</div>


    </div>
</div>





          )   

   
   }}



      </Consumer>  
    
    )
  }
}
