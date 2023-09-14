import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: "https://th.bing.com/th/id/OIP.LQ-xwK6R2QV0YfCEycRBggHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          id: 1
        },
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: "https://th.bing.com/th/id/OIP.lHfNQ4X4wti5VM-W0jtiawHaE7?w=340&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          id: 2
        },
        {
          price: 989,
          title: 'Laptop',
          qty: 1,
          img: "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          id: 3
        }
      ]
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // Create a copy of the product to avoid directly modifying state
    const updatedProduct = { ...products[index] };

    updatedProduct.qty += 1;

    // Update the products array with the updated product
    products[index] = updatedProduct;

    this.setState({
      products: products
    });
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    const updatedProduct = { ...products[index] };
    updatedProduct.qty -= 1;
    products[index] = updatedProduct;

    this.setState({
      products: products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // Use filter to create a new array without the deleted product
    const updatedProducts = products.filter((product) => product.id !== id);

    this.setState({
      products: updatedProducts
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    const cartTotal = products.reduce((total, product) => {
      return total + product.qty * product.price;
    }, 0);

    return cartTotal;
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10, fontSize: 20}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
// import React from 'react';
// import Cart from './Cart';
// import Navbar from './Navbar';
// // import CartItem from './CartItem';
// class App extends React.Component {
// // function App() {

//   constructor () {
//     super();
//     this.state = {
//         products:[
//     {
//         price: 999,
//         title: 'Mobile Phone',
//         qty: 1, // shallow merging : react will change only qty in the state and not change other properties
//         img: "https://th.bing.com/th/id/OIP.LQ-xwK6R2QV0YfCEycRBggHaFj?w=244&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//         id: 1

//     },
//     {
//         price: 99,
//         title: 'Watch',
//         qty: 1, // shallow merging : react will change only qty in the state and not change other properties
//         img: "https://th.bing.com/th/id/OIP.lHfNQ4X4wti5VM-W0jtiawHaE7?w=340&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//         id: 2

//     },
//     {
//         price: 989,
//         title: 'Laptop',
//         qty: 1, // shallow merging : react will change only qty in the state and not change other properties
//         img: "https://th.bing.com/th/id/OIP.B7vLzditRRJGxq1MSpB3QQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//         id: 3

//     }
//   ]
//  }
//  // this.increaseQuantity = this.increaseQuantity.bind(this);
//     // this.testing();
// }
// handleIncreaseQuantity = (product) => {
// console.log('Heyy please inc the qty of',product);
// const { products } = this.state;
// const index = products.indexOf(product);

// products[index].qty += 1;

// this.setState({
//     products: products
// })
// }

// handleDecreaseQuantity = (product) => {
// console.log('Hey please dec the qty of',product);
// const { products } = this.state;
// const index = products.indexOf(product);

// if(products[index].qty === 0){
//     return;
// }
// products[index].qty -= 1;

// this.setState({
//     products: products
// })
// }

// handleDeleteProduct = (id) => {
// const { products } = this.state;

// const items = products.filter((item) => item.id !== id); // [{}]

// this.setState({
//     products:items
//   })
// }
// // getCartCount = () => {
// //   const {products} = this.state;

// //   let count = 0;

// //   products.array.forEach(element => {
// //     count += products.qty;
// //   });
// //   return count;
// // }

// getCartCount = () => {
//   const { products } = this.state;

//   let count = 0;

//   products.forEach((product) => {
//     count += product.qty;
//   });
  
//   return count;
// }

// // getCartTotal = () => {
// //   const { products } =this.state;

// //   let cartTotal = 0;

// //   products.map((product) => {
// //     cartTotal = cartTotal + product.qty * product.price
// //   })
// //   return cartTotal;
// // }
// getCartTotal = () => {
//   const { products } = this.state;

//   const cartTotal = products.reduce((total, product) => {
//     return total + product.qty * product.price;
//   }, 0);

//   return cartTotal;
// }




//  render () {
//     const {products} = this.state;
//   return (
//     <div className="App">
//      {/* <h1>Cart</h1> */}
//      <Navbar count={this.getCartCount()}/>
//      <Cart
//      products = {products}
//      onIncreaseQuantity={this.handleIncreaseQuantity}
//      onDecreaseQuantity={this.handleDecreaseQuantity}
//      onDeleteProduct={this.handleDeleteProduct}
//      />
//      <div>TOTAL : {this.getCartTotal()}</div>
//     </div>
//   );
//  }
// }
// export default App;
