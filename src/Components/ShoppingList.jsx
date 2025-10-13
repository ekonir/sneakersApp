import {sneakersList} from "../datas/sneakersList";
import SneakersItem from "./SneakerItem";
import '../styles/ShoppingList.css';

function ShoppingList(){
    return (
        <div className={"shopping-list"}>
            <h2>Nos Sneakers (Pisaneschi Léa)</h2>
            <div className={"sneakers-grid"}>
                {sneakersList.map((sneaker) =>(
                    <SneakersItem
                        key={sneaker.id}
                        sneakerData={sneaker}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;