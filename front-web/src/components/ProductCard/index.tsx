import {ReactComponent as Pizza} from '../../assets/pizza.svg';

const ProductCard = ( ) => {
    return (
      <div className="card-container">
         <h4 className="card-title">Pizza Calabresa</h4>
         <Pizza className="card-image"/>
         <h3 className="card-price">R$ 34,90</h3>
         <div className="card-description">
            <h4 className="description-title">Descrição</h4>
            <p className="description">Descrição Uma deliciosa combinação de
             Linguiça Calabresa, rodelas de 
             cebolas frescas, azeitonas
             pretas, mussarela, polpa de
             tomate, orégano e massa
             especial.</p>
        </div>
     </div>
    );
}

export default ProductCard;