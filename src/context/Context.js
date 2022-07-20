import React, {createContext, useContext, useReducer} from 'react';
import Products from '../products.json';
import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();

const Context = ({children}) => {

  const products = Products.map((item) => {
      //console.log(item.name);
      return item;
  });
  
  const [state, dispatch] = useReducer( cartReducer, { products: products, cart: [] } );

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });


  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
    </Cart.Provider>
  );
};



export const CartState = () =>{
    return useContext(Cart);
}

export default Context;