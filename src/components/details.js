import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Details extends Component {
state={added:false  }

addToCart=()=>{this.state({added:true})   }


  render() { const {title,img,price,inCart} =this.props.items
    return (
      
      
      <div className="col-lg-3">
      <div className="card my-3 pt-3">
        
 <div className="img-container ">
 <Link to="/details">
     <img src={img} className="card-img-top pictures" alt="phone.jpg" onClick={this.props.handleDetail} />
     </Link>

   <button onClick={this.props.addCart}  disabled={inCart ? true : false} className="btn picture-attachment">
    {inCart ? <p className="mb-0">InCart </p>
    
   :  <i className="fas fa-cart-arrow-down fa-1.5x ">
  
     </i>  }
</button>
     </div>
    
     <div className="card-footer p-1  d-flex justify-content-between">
     <h5 >{title}  </h5>     <h5> $ { price  }</h5>
</div>

      </div>
      </div>
    )
  }
}
