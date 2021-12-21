import { Product } from '../../pages/Order/types';


type Props = {
    product: Product;
}

const ProductCard = ({product}:Props) => {
    return (
      <div className="card-container">
         <h4 className="card-title">{product.name}</h4>
         <img src={product.imageUri} alt={product.name} className="card-image"/>
         <h3 className="card-price"> R$ {product.price}</h3>
         <div className="card-description">
            <h4 className="description-title">Descrição</h4>
            <p className="description">{product.description}</p>
        </div>
     </div>
    );
}

export default ProductCard;