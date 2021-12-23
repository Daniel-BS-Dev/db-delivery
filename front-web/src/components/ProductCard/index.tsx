import { formatPrice } from '../../pages/Order/helpers';
import { Product } from '../../pages/Order/types';

type Props = {
    product: Product;
    isSelected: boolean;
    onSelectProduct: (product: Product) => void;
}

const ProductCard = ({product, onSelectProduct, isSelected}:Props) => {

    return (
      <div className={`card-container ${isSelected ? 'selected': ''}`} onClick={() => onSelectProduct(product)}>
         <h4 className="card-title">{product.name}</h4>
         <img src={product.imageUri} alt={product.name} className="card-image"/>
         <h3 className="card-price"> {formatPrice(product.price)}</h3>
         <div className="card-description">
            <h4 className="description-title">Descrição</h4>
            <p className="description">{product.description}</p>
        </div>
     </div>
    );
}

export default ProductCard;