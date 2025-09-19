import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';
function Banner(){
    return(
        <header className="banner">
            {/*affichage en JSX du logo de la boutique en ligne */}
            <img src={logo} className="banner-logo" alt="Logo Sneakers" />

            {/* section contenant le titre et le description*/}
            <div className="banner-content">
                {/* titre principal */}
                <h1> Sneakers store</h1>
                {/* slogan */}
                <p>trouver les sneakers de vos reves</p>
            </div>
        </header>
    )
}
export default Banner;