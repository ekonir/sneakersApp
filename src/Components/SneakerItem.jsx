import '../styles/ShoppingItem.css';
import CustomerReview from './CustomerReview';

function SneakerItem({ bestSeller,image, nom, marque, prix, style, esthetique, confort}){
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
                <CustomerReview  reviewType='esthetique' scaleValue={esthetique}/>
                <CustomerReview  reviewType='confort' scaleValue={confort}/>
            </div>
        </div>
    );
}

export default SneakerItem;