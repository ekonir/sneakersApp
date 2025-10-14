import { useState, useEffect } from 'react';
import Banner from './Banner';
import '../styles/App.css';
import ShoppingList from './ShoppingList';
import SneakerItem from './SneakerItem';
import Cart from './Cart'

function App() {

  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem('cart');
    return saveCart ? JSON.parse(saveCart) :[];
  });
  useEffect (()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);

  const addToCart = (sneaker) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === sneaker.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === sneaker.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...sneaker, quantity: 1 }];
      }
    });
  };


  return (
    <div className="App">
      <Banner /> {/* place le composant dans le jsx */}
      <ShoppingList onAddToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );

}
export default App;
