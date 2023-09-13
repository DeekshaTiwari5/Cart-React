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
   handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of',product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
   }

   handleDecreaseQuantity = (product) => {
    console.log('Hey please dec the qty of',product);
    const { products } = this.state;
    const index = products.indexOf(product);
   
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products: products
    })
   }

   handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
        products:items
    })
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
                       onIncreaseQuantity={this.handleIncreaseQuantity}
                       onDecreaseQuantity={this.handleDecreaseQuantity}
                       onDeleteProduct={this.handleDeleteProduct}
                    />
                    )
                })}
               
            </div>
            
        //    <div>CART</div>
        );
    }
}     
export default Cart;