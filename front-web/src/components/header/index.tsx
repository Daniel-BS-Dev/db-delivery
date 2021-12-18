import {ReactComponent as Image} from '../../assets/bike.svg';
import './styles.css';

const Header = () => (
    <header className="header-container">
        <div className="header-content">
          <Image />
          <h1 className="header-title">DB DELIVERY</h1>
        </div> 
    </header>
)

export default Header;