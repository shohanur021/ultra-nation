import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    let totalPopulation = 0;
   for (let i = 0; i < cart.length; i++) {
       const country = cart[i];
       totalPopulation=totalPopulation+country.population;
   } 
   console.log(cart);
  

    return (
        <div >
            <h2>This is cart : {cart.length}</h2>
            <h3>Total population : {totalPopulation}</h3>
            
            <div style={{border:"2px solid blue",margin:"15px",padding:"5x"}}>
            <ul>
               {
                 cart.map(element => <li>{element.name}</li>)
               }  
               </ul> 
            </div>         
        </div>
    );
};

export default Cart;