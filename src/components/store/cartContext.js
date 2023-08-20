import React from "react";

const CartContext = React.createContext({
    cart: [],
    total : 0,
    addtoCart: ()=>{},
    removeFromCart : () => {},

});

export default CartContext;