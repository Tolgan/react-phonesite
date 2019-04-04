import React, { Component } from 'react'
import {storeProducts,detailProduct} from "../data"


       const Mycontext=React.createContext()

       class ProductProvider extends Component {

state={products:[],deneme2:"anan" ,detailProduct:detailProduct,cart:[],carttotal:[]
,modalopen:false   }

componentDidMount(){   this.getDestruction() ;    }

getDestruction=()=>{  
let tempProducts=[];
storeProducts.forEach(item=> {const products={...item} ; tempProducts=[...tempProducts,products] 
  ;console.log(tempProducts) }  )

this.setState(()=>{return{products:tempProducts }} )
}

handleDetail=(id)=>{const product=this.state.products.find(item=>item.id===id) ;
   this.setState({detailProduct:product})       
}




addToCart=(id)=>{const something=this.state.products.find(item=>item.id===id) 
      const products=[...this.state.products] ;  
              const naber=products.indexOf(something)
 const specify=products[naber]
      specify.inCart=true
      specify.count=1
      specify.total=specify.price*specify.count ;this.ModalOpen(id)
      let bum=specify.total  
      this.state.cart.map(item=>bum=bum+item.total    ) 
        


 ;this.setState(()=>{return{cart:[...this.state.cart,specify],modalopen:true,carttotal:bum}  })


}
 
 ModalOpen=(id)=>{const product=this.state.products.find(item=>item.id===id) 
   ; 
  this.setState( {modalopen:true,detailProduct:product} )}
 
ModalClose=()=>{this.setState({modalopen:false })}
increase=(id)=>{ const something=this.state.products.find(item=>item.id===id) 
  const products=[...this.state.cart] ;  
          const naber=products.indexOf(something)
const specify=products[naber]
  specify.count=specify.count+1
  specify.total=specify.price*specify.count    
   const bum=specify.price
     
  this.setState({cartvalue:[],carttotal:this.state.carttotal+bum})
  console.log(this.state)           }

  decrease=(id)=>{ const something=this.state.products.find(item=>item.id===id) 
    const products=[...this.state.cart] ;  
            const naber=products.indexOf(something)
  const specify=products[naber]
    specify.count=specify.count-1
    specify.total=specify.price*specify.count  
    const bum=specify.price

    this.setState({carttotal:this.state.carttotal-bum} 
            
      ) 
       if (specify.count<1){return this.remove(id)  } 


             }
remove=(id)=>{ let something=[...this.state.cart] 
          const met=something.filter(item=>item.id!==id )  
          const forindex=something.find(item=>item.id===id)
             const specifys=something[something.indexOf(forindex)]
          specifys.count=0  ;  specifys.inCart=false
          specifys.total=0   

       console.log(this.state);      this.setState({cart:met})                   }

clearList=()=>{  this.setState({cart:[]} )  ;this.getDestruction()      }

render(){ 
    return (
 

        <Mycontext.Provider value={{...this.state,addToCart:this.addToCart,handleDetail:this.handleDetail
        ,increase:this.increase,decrease:this.decrease,remove:this.remove,clear:this.clearList,
        ModalClose:this.ModalClose, ModalOpen:this.ModalOpen,cartTotal:this.cartTotal}} >

{this.props.children}
        </Mycontext.Provider>
      
    )
  }
}



const Consumer=Mycontext.Consumer

export {ProductProvider,Consumer}