import { Product } from '../../pages/Order/types';

type Props = {
    product: Product;
    isSelected: boolean;
    onSelectProduct: (product: Product) => void;
}

function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',  // tipo da moeda
        maximumFractionDigits: 2 // numero de digitos
});

    return formatter.format(price);
}
//
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