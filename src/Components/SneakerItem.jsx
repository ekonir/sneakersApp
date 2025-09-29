import '../styles/SneakerItem.css';
import CustomerReview from './CustomerReview';

function SneakerItem({ bestSeller,image, nom, marque, prix, style, esthetique, confort}){
    const handleClickAvis = () =>{
        alert("bouton cliqué");
    };

    //const formatRewiew = (rewiewType, scaleValue)
    // const scaleType = reviewType === 'confort' ? '😌':'💖'
    // const icons = scaleType.repeat(scaleValue);
    // return '${scaleType}: ${icons} (${scaleValue}/5)';

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
                <button onClick={handleClickAvis}>Voir les avis</button>
                <CustomerReview  reviewType='esthetique' scaleValue={esthetique}/>
                <CustomerReview  reviewType='confort' scaleValue={confort}/>
            </div>
        </div>
    );
}

export default SneakerItem;