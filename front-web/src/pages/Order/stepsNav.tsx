import './styles.css';

const StepsNav = () => {
    return (
       <nav className="nav-container">
           <h3 className='nav-title'>
               SIGA AS<br/>ETAPAS
           </h3>
           <div className='nav-subtitle'>
               <p><strong>1</strong>  Selecione os produtos e localização.</p>
               <p><strong>2</strong>  Depois clique em <span>“ENVIAR PEDIDO”</span></p>
           </div>
           <button className='nav-button'>
               Pedido enviado com sucesso! Nº 5
           </button>
       </nav>
    );
}

export default StepsNav;