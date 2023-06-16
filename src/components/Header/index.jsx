import '../../styles/header.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_kasa.png'
 

function Header() {
    return (
    <div className='main-nav'>

        <div>
            <img src={logo} alt='Logo Kasa' className='logo-header' />
        </div>

            <nav className="nav">
                <Link to="/">Accueil</Link>
                <Link to="/à-propos">À propos</Link>
            </nav>
    </div>
    )
}

export default Header