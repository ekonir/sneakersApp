import '../styles/SneakerItem.css';
import { useState } from 'react';

function SneakerItem({ nom, marque, prix, style, esthetique, confort, image, bestSeller =false }){
    const [showReview,setShowReview] = useState(false)
    const formatReview = (reviewType, scaleValue)=>{
     const scaleType = reviewType === 'confort' ? '😌':'💖'
     const icons = scaleType.repeat(scaleValue);
     return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };
    
     const handleToggleAvis = () =>{
        const esthetismeText = formatReview('esthétisme',esthetique);
        const confortText = formatReview('confort', confort);
        alert(`Avis pour ${nom}: \n${esthetismeText}\n${confortText}`);
        setShowReview(!showReview);
    };


    return (
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
                {bestSeller && <span className="best-seller-badge">Top Ventes</span>}
           

            <div className="sneaker-image">
                <img src={image} alt={nom} className="sneaker_image"/>
            </div>

            <h3>{nom}</h3>

            <p className="sneaker-brand">{marque}</p>
            <p className="sneaker-price">{prix} €</p>
            <p className="sneaker-style">{style}</p>

            <div className= "sneaker_rewiew">
                <button onClick={handleToggleAvis}>
                    {showReview ? 'Masquer les avis' : 'Voir les avis'}</button>
                
            </div>
        </div>
    );
}

export default SneakerItem;