//instalar o axios
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import ProductSkeleton from "../../components/skelecton";
import { Product } from "./types";

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
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

    return(
         <div className="productList-container">
            <div className="content-items">
            {isLoader ? <ProductSkeleton/> : products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
            </div>
         </div>
    );
}

export default ProductList;