import { Link } from 'react-router-dom';
import {ReactComponent as Image} from '../../assets/Imagem.svg';
import Footer from '../../components/Footer';
import './styles.css';

const Home = () => (
<>
   <div className="home-container">
       <div className="home-content">
           <div className="home-container-title">
                <h1 className="home-title">
                   Faça seu pedido <br/>que entregamos <br/>pra você!!!
               </h1>
               <Image className='imageView' />
               <p className="home-subtitle">
                   Escolha o seu pedido e em poucos <br/>minutos levaremos na sua porta
               </p>
               <Link to="/order">
                  <button className="home-button">
                    FAZER PEDIDO
                  </button>
                </Link>
            </div>
           <Image className='imageNone'/>
       </div>
   </div>
   <Footer />
</>
)

export default Home;