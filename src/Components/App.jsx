import { useState } from 'react';
import Banner from '../Components/Banner';
import '../styles/App.css';
import ShoppingList from '../Components/ShoppingList';
import SneakerItem from '../Components/SneakerItem';
import Cart from './Cart'

function App() {
  
const[cart,setCart]= useState([]);
const addToCart=(sneaker)=>{
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === sneaker.id);

    if (existingItem){
      return prevCart.map(item =>
        item.id === sneaker.id
          ? {... item, quantity: item.quantity +1}
          : item
      );
    } else {
      return[...prevCart,{...sneaker,quantity:1}];
    }
  });
  };

  return (
    <div className="App">
      <Banner/> {/* place le composant dans le jsx */}
       <ShoppingList onAddToCart={addToCart}/>
       <Cart cartItems = {cart}/>
      </div>  
  );
  
}
export default App;
