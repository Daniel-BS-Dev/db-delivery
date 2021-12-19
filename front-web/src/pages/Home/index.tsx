import {ReactComponent as Image} from '../../assets/Imagem.svg';
import {ReactComponent as Instagram} from '../../assets/instagram.svg';
import {ReactComponent as Youtube} from '../../assets/youtube.svg';

import './styles.css';

const Home = () => (
   <div className="home-container">
       <div className="home-content">
           <div className="home-container-title">
                <h1 className="home-title">
                   Faça seu pedido que entregamos pra você!!!
               </h1>
               <Image className='imageView' />
               <p className="home-subtitle">
                   Escolha o seu pedido e em poucos minutos levaremos na sua porta
               </p>
               <button className="home-button">
                   FAZER PEDIDO
               </button>
           </div>
           <Image className='imageNone'/>
       </div>
       <footer className='home-footer'>
          <div className="home-footer-container">
              <div className="home-footer-title">
                 <span>App desenvolvido durante a 2ª ed. do evento <strong>Semana devsuperior</strong></span>
              </div>
              <div className="home-footer-images">
                 <Instagram className='imgInstragram' />
                 <Youtube />
              </div>
          </div>
      </footer>
   </div>
   
)

export default Home;