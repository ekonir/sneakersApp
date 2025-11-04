import '../styles/SneakerItem.css';
import { useState } from 'react';
import CustomerReview from './CustomerReview';

function SneakerItem({sneakerData,onAddToCart}) {
    const [showReview, setShowReview] = useState(false)

    const{nom, marque, prix, style, esthetique, confort, image, bestSeller = false } = sneakerData;
    
    const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === 'confort' ? '😌' : '💖'
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };

    const handleToggleAvis = () => {
        const esthetismeText = formatReview('esthétisme', esthetique);
        const confortText = formatReview('confort', confort);
        alert(`Avis pour ${nom}: \n${esthetismeText}\n${confortText}`);
        setShowReview(!showReview);
    };

    const handleAddToCart = () => {
        console.log('Données transmises:', sneakerData);
        onAddToCart(sneakerData); // Appelle la fonction reçue en props, qui remonte via ShoppingList jusqu'à App
    };


    return (
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
            {bestSeller && <span className="best-seller-badge">Top Ventes</span>}


            <div className="sneaker-image">
                <img src={image} alt={nom} className="sneaker_image" />
            </div>

            <h3>{nom}</h3>

            <p className="sneaker-brand">{marque}</p>
            <p className="sneaker-price">{prix} €</p>
            <p className="sneaker-style">{style}</p>


            <div className="sneaker-actions">
                <button onClick={handleAddToCart} className="add-to-cart-btn">
                    Ajouter au panier
                </button>
            </div>


            <div className="sneaker_rewiew">
                <button onClick={handleToggleAvis}>{showReview ? 'Masquer les avis' : 'Voir les avis'}</button>
                {showReview && (
                    <dif className="avis-details">
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort} />
                    </dif>
                )}
            </div>
        </div>
    );
}

export default SneakerItem;