import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {

    render () {
        return(
            <div className='cart'>
               <CartItem/>
               <CartItem/>
               <CartItem/>
               <CartItem/>
            </div>
            
        //    <div>CART</div>
        );
    }
}     
export default Cart;