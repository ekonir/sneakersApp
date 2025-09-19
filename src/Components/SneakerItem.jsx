import '../styles/ShoppingItem.css';
import CustomerReview from './CustomerReview';

function SneakerItem({ nom, marque, prix, style, esthetique, confort}){
    return (
        <div className="sneaker-item">
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