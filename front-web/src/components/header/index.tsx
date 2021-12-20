import { Link } from 'react-router-dom';
import {ReactComponent as Image} from '../../assets/bike.svg';
import './styles.css';

const Header = () => (
    <header className="header-container">
        <Link to="/" className="header-content">
          <Image className="imageHeader"/>
            <h2 className="header-title">DB DELIVERY</h2>
        </Link>
    </header>
)

export default Header;