import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1, // shallow merging : react will change only qty in the state and not change other properties
            img: ""

        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);//2 nd way
    }
    increaseQuantity=() => {          // 3rd way od binding arrow functions
        //  this.state.qty += 1;
        //  console.log('this.state',this.state); 
// ----------------- setState form 1 : if require function form
//         this.setState({
//             qty: this.state.qty + 1
//             title : "some new title"
//         });

//----------------- setState form  2 : if require prevState  use this
        this.setState((prevState) => {
            return{ 
            qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity=() => {
        this.setState((prevState) => {
            return{ 
            qty: prevState.qty - 1
            }
        });

    }
    render () {
        const { price, title, qty } = this.state; // destructuring
        return (
         <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image}/>

            </div>
            <div className='right-block'>
            <div style={{fontSize: 25}}>{title}</div>
            <div style={{color: '#777'}}> Rs.{price}</div>
            <div style={{color: '#777'}}> Qty:{qty}</div>
               {/*<div style={{fontSize: 25}}>{this.state.title}</div> <div style={{fontSize: 25}}>Phone</div>*/}
               {/*<div style={{color: '#777'}}>{this.state.price}</div>           {/*<div style={{color: '#777'}}>Rs. 999</div>*/}
               {/*<div style={{color: '#777'}}>{this.state.qty}</div>            {/*<div style={{color: '#777'}}>Qty: 1</div> */}
                <div className='cart-item-actions'>
                {/* Buttons :flaticon*/}

                <img 
                  alt='increase' 
                  className='action-icons' 
                  src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
                  onClick={this.increaseQuantity.bind(this)}    //onClick={this.increaseQuantity.bind(this)} //1 st way od binding
                /> 
                <img 
                  alt='decrease' 
                  className='action-icons' 
                  src='https://t3.ftcdn.net/jpg/05/25/82/62/240_F_525826235_kQXRqPCQyDuhXGjV4FjpVY8Mb68jGJD8.jpg'
                  onClick={this.decreaseQuantity.bind(this)} 
                />
                <img 
                  alt='delete' 
                  className='action-icons' 
                  src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png'
                />
                
                </div>                   
            </div>
         </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;