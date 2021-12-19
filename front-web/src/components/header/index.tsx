import {ReactComponent as Image} from '../../assets/bike.svg';
import './styles.css';

const Header = () => (
    <header className="header-container">
        <div className="header-content">
          <Image />
          <h2 className="header-title">DB DELIVERY</h2>
        </div> 
    </header>
)

export default Header;