import React, { Component } from 'react'
import {Consumer} from "./context.js"
import "./modal.scss"
import {Link} from "react-router-dom"
export default class Modal extends Component {
  render() {
    return (
      <Consumer >

{value=> { if (value.modalopen===true) {
return (
<div className="container-fluid asdfg">
    <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 text-center mx-auto">

<h5 className="text-warning text-capitalize ">Item added to your cart    </h5>
<img src={value.detailProduct.img} className="img-fluid class"></img>
<h2 className="text-info">{value.detailProduct.title}</h2>
<h4 className="text-dark">Price:${value.detailProduct.price}</h4> 
<Link to="./">
<button onClick={value.ModalClose} className="btn  btn-secondary"> Store </button>
</Link>
<Link to="./card">
<button onClick={value.ModalClose} className="ml-1 btn btn-primary"> Go to Carts  </button>
</Link>
        </div>
    </div>
</div>



)


} 
else{return null}

}

}


      </Consumer>
    )
  }
}
