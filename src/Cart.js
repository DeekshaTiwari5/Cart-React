import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;

  return (
    <div className='cart'>
      {products.map((product) => (
        <CartItem
          product={product}
          key={product.id}
          onIncreaseQuantity={onIncreaseQuantity}  // Use props directly
          onDecreaseQuantity={onDecreaseQuantity}  // Use props directly
          onDeleteProduct={onDeleteProduct}        // Use props directly
        />
        
      ))}
    </div>
  );
};

export default Cart;
// import React from 'react';
// import CartItem from './CartItem';


// // class Cart extends React.Component {
//     const Cart = (props)=> {
   
//     // render () {
//         // const {products} = props;//this.state;
//         const { products, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
//         // const arr = [1,2,3,4,5]; //render list
//          return(
//             <div className='cart'>
//                 {products.map((product) =>{
//                     // return (
//                     <CartItem 
//                     product={product} 
//                     key={product.id} // Assuming that product has an 'id' property
//                     onIncreaseQuantity={this.handleIncreaseQuantity}
//                     onDecreaseQuantity={this.handleDecreaseQuantity}
//                     onDeleteProduct={this.handleDeleteProduct}
                       
//                     />
//                     //  )
                    
//                 })}
               
//             </div>
            
//         //    <div>CART</div>
//         );
//     };
// // }     
// export default Cart;