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
    //    this.testing();

    }
    //react do batching by default and setState call is asynch
    //batching hold true in  react eventhandlers in every eventhandler but every time its not true in AJX and if using promises react would't do batching and setState call will act like synch call
//    testing(){
//      const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done');
//         }, 5000);
//      });
//      promise.then(() =>{
//      //setState acts like a synchronus call
      
//     //  this.setState({ qty: this.state.qty + 10});
//     //  this.setState({ qty: this.state.qty + 10});
//     //  this.setState({ qty: this.state.qty + 10});
     
     
//      console.log('state', this.state);
//     });
// }


        // this.setState({ qty :100},() =>{
        //     console.log('state',this.state);//there will be no change in its value , it will be an old state becus setState is asynch call
        // });   // inside a event handler if we make event i.e, this.setState then in console.log if we call gain then 







//Use the callback function to access the updated state
        // this.setState({ qty :this.state.qty+10},() =>{
        //     console.log('state',this.state);//there will be no change in its value , it will be an old state becus setState is asynch call
        // });   // inside a event handler if we make event i.e, this.setState then in console.log if we call gain then 
        // this.setState({ qty :this.state.qty+10},() =>{
        //     console.log('state',this.state);//there will be no change in its value , it will be an old state becus setState is asynch call
        // });   // inside a event handler if we make event i.e, this.setState then in console.log if we call gain then 
        // this.setState({ qty :this.state.qty+10},() =>{
        //     console.log('state',this.state);//there will be no change in its value , it will be an old state becus setState is asynch call
        // });   // inside a event handler if we make event i.e, this.setState then in console.log if we call gain then 

//      });
//    }




    increaseQuantity=() => {          // 3rd way od binding arrow functions
        //  this.state.qty += 1;
        //  console.log('this.state',this.state); 
// ----------------- setState form 1 : if require function form
        // this.setState({
        //     qty: this.state.qty + 1
        //     //title : "some new title"
        // }, () =>{});    //callback fun: it execute when our state will finish executing

    //     this.setState({
    //         qty: this.state.qty + 1     //}after rendering 3 times its considers once cous of {BATCHING: NO MATTER HOE MANY TIMES U CALL REACT WILL BATCH ALL RENDING IN ONE 1 setState}
    //         //title : "some new title"
    //     });
    //     this.setState({               //react will only take up the last call only 1 shallow only the last one is considered and 1 increased
    //         qty: this.state.qty + 5
    //         //title : "some new title"
    //     });
    // }
//----------------- setState form  2 : if require prevState  use this
// this.setState((prevState) => {
//     return {
//       qty: prevState.qty + 1
//     }
//   });
        this.setState((prevState) => {
            return{ 
            qty: prevState.qty + 1
            }
        },() => {       // to solve async problem react provide this callback fun
           // console.log('this.state',this.state);
        });


       // console.log(this.state);  //setState is asynchronous so react dont know when the fun is going to complete so Qty:1 then qty=2...




    //     this.setState((prevState) => {     // all the setState is considered and increase becomes 1+3=4 but it is rendered only once cous of batching 
    //         return{ 
    //         qty: prevState.qty + 1
    //         }
    //     });
    
    //   this.setState((prevState) => {       // queue is considered and all the prev state is  updated brfore calling next
    //     return{ 
    //     qty: prevState.qty + 1
    //     }
    //    });
}
    





    decreaseQuantity=() => {
        const { qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{ 
            qty: prevState.qty - 1
            }
        });

    }






    render () {
        console.log('render');
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