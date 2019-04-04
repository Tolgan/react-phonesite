import React, { Component } from 'react'
import {Consumer} from "./context.js"

export default class CartColumn extends Component {
  render() {return(
    

    
          <div className="row my-1 text-center">
            
            <div className="col-lg-2">
       <img src={this.props.item.img } className="img-fluid" alt="img-saşdal" style={{width:"5rem"}}/>  
</div>
<div className="col-lg-2 mx-auto">
   <h3>{this.props.title}  </h3> 
   </div> 
<div className="col-lg-2">

${this.props.item.price}


</div>

   <div className="col-lg-2 mx-auto">
    <i className="btn btn-black fas fa-minus" onClick={this.props.decrease}> </i>

    <span className="px-4 btn btn-black mx-1 py-1" >{this.props.item.count} </span>              
                  <i className="btn-black btn fas fa-plus" onClick={this.props.increase}> </i>
</div>

<div className="col-lg-2">
<i className="fa fa-trash fa-2x text-danger" onClick={this.props.remove}></i>

</div>
<div className="col-lg-2">

 ${this.props.item.total} 



</div>
            


          </div>
 )}}
