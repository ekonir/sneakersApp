import { useEffect } from "react";
import '../styles/App.css'

function Cart({cartItems}) {
    const totalItems = cartItems.reduce((sum,item) => 
        sum + item.quantity,0)
    const totalPrice = cartItems.reduce((sum,item) =>
        sum + (item.prix * item.quantity),0);
     
    if (cartItems.length === 0){
        return (
            <div className="cart">
                <div className="cart-header">
                    <h2>Mon panier</h2>
                </div>
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h3>Votre Panier est vide</h3>
                    <p>Découvrez notre collection de Sneakers et ajoutez vos modèles préférés !</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart">
                <div className="cart-header">
                    <h2>Mon panier ({totalItems})</h2>
                </div>

                <div className="cart-items">
                    {cartItems.map(item =>(
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.nom} className="cart-item-image"/>
                            <div className="cart-item-details">
                                <h4>{item.nom}</h4>
                                <p>{item.marque}</p>
                                <p> Quantité : {item.quantity} </p>
                                <p className="cart-item-price"> {item.prix * item.quantity} </p>
                            </div>
                        </div>
                    ))};
                </div>
                
                <div className = "cart-summary"> 
                    <h3> Total : {totalPrice}</h3>
                </div>

            </div>
        )
    }
    function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
  return (
    <div className="panier">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.nom} className="cart-item-image" />
          <div className="cart-item-details">
            <h4>{item.nom}</h4>
            <p>{item.marque}</p>
            <p>Quantité : {item.quantity}</p>
            <p className="cart-item-price">
              Prix : {item.prix * item.quantity}€
            </p>
          </div>

          <p>
            {item.nom} – Quantité : {item.quantity}
          </p>

          <button
            onClick={() => {
              if (window.confirm(`Supprimer ${item.nom} du panier ?`)) {
                onRemoveFromCart(item.id);
              }
            }}
          >
            🗑️ Supprimer ce produit
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total : {totalPrice}€</h3>
      </div>

      <div className="cart-footer">
        <button
          onClick={() => {
            if (window.confirm("Êtes-vous sûr de vouloir vider le panier ?")) {
              onClearCart();
            }
          }}
        >
          🧹 Vider le panier
        </button>
      </div>
    </div>
  );
}

}

export default Cart