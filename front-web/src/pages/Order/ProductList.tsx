//instalar o axios
import ProductCard from "../../components/ProductCard";
import { Product } from "./types";
import { checkIsSelected} from "./helpers";

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductList = ({products, onSelectProduct, selectedProducts}:Props) => {
      
    return(
      <>
         <div className="productList-container">
            <div className="content-items">
              {products.map(product => (
                <ProductCard 
                    key = {product.id}
                    product = {product} 
                    onSelectProduct = {onSelectProduct}
                    isSelected = {checkIsSelected(selectedProducts, product)}
                />
              ))}
            </div>
         </div>
         
      </>
    );
}

export default ProductList;