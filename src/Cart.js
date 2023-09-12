import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 1, // shallow merging : react will change only qty in the state and not change other properties
            img: "",
            id: 1

        },
        {
            price: 99,
            title: 'Watch',
            qty: 1, // shallow merging : react will change only qty in the state and not change other properties
            img: "",
            id: 2

        },
        {
            price: 989,
            title: 'Laptop',
            qty: 1, // shallow merging : react will change only qty in the state and not change other properties
            img: "",
            id: 3

        }
    ]
  }
}

    render () {
        const {products} =this.state;
        // const arr = [1,2,3,4,5]; //render list
        return(
            <div className='cart'>
                {products.map((product) =>{
                    return (
                    <CartItem 
                       product={product} 
                       key={product.id}
                    />
                    )
                })}
                {/* {arr.map((item) => {  // render list in our component
                    return item + 5
                })} */}
               {/* <CartItem qty={1} price ={99} title={"Watch"} img={''}/>  {/*define prop property which are used by prop items itself */}   
               {/* props: arguments passed to function*/}
               {/* <CartItem/> // we are getting same mobile option instead of diff like watch etc
               <CartItem/>
               <CartItem/> */}
            </div>
            
        //    <div>CART</div>
        );
    }
}     
export default Cart;