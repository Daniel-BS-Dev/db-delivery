//instalar o axios
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import ProductSkeleton from "../../components/skelecton";
import { Product } from "./types";
import { checkIsSelected } from "./helpers";


const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]); // para saber quais são os produtos selecionados
    const [isLoader, setIsLoader] = useState(false);
    
    useEffect(() => {
      setIsLoader(true);
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
      .finally(() => {
          setIsLoader(false);
      })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
        
      }

    return(
         <div className="productList-container">
            <div className="content-items">
            {isLoader ? <ProductSkeleton/> : products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onSelectProduct={handleSelectProduct}
                    isSelected = {checkIsSelected(selectedProducts, product)}
                />
            ))}
            </div>
         </div>
    );
}

export default ProductList;