
const StepsNav = () => {
    return (
       <nav className="nav-container">
           <h3 className='nav-title'>
               SIGA AS<br/>ETAPAS
           </h3>
           <ul className='nav-subtitle'>
               <li><strong>1</strong>  Selecione os produtos e localização.</li>
               <li><strong>2</strong>  Depois clique em <span>“ENVIAR PEDIDO”</span></li>
           </ul>
           <button className='nav-button'>
               Pedido enviado com sucesso! Nº 5
           </button>
       </nav>
    );
}

export default StepsNav;