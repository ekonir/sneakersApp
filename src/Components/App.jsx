import Banner from '../Components/Banner';
import '../styles/App.css';
import ShoppingList from '../Components/ShoppingList';
import SneakerItem from '../Components/SneakerItem';

function App() {
  return (
    <div className="App">
      <Banner/> {/* place le composant dans le jsx */}
       <ShoppingList/>
      </div>  
  );
}

export default App;
