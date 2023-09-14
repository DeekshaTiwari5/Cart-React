import React from 'react';

// class CartItem extends React.Component {
    const CartItem = (props) =>{
    // render () {
        ///console.log('render');
        // console.log('this.props',this.props);
        const { price, title, qty } = props.product;//instead of state props used, we removed this because it not class anymore
        //const { price, title, qty } = this.state; // destructuring
        const { 
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props; //}=this.props; //this was removed cous of function formationg we change it fron class to func()
        return (
         <div className='cart-item'>
            {/* {this.props.jsx} */}
            <div className='left-block'>
                <img style= {styles.image} src={product.img}/>

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
                  onClick={() =>  onIncreaseQuantity(product)}
                  //onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                //   onClick={this.increaseQuantity.bind(this)}    //onClick={this.increaseQuantity.bind(this)} //1 st way od binding
                /> 
                <img 
                  alt='decrease' 
                  className='action-icons' 
                  src='https://t3.ftcdn.net/jpg/05/25/82/62/240_F_525826235_kQXRqPCQyDuhXGjV4FjpVY8Mb68jGJD8.jpg'
                  onClick={() =>  onDecreaseQuantity(product)}
                //   onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                //   onClick={this.decreaseQuantity.bind(this)} 
                />
                <img 
                  alt='delete' 
                  className='action-icons' 
                  src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png'
                  onClick={()=> onDeleteProduct(product.id)}
                />
                </div>                   
            </div>
         </div>
        );
    }
// }

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;