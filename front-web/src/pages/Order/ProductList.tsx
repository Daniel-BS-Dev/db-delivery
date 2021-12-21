//instalar o axios
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { fetchProducts } from "./api";

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
    }, []);

    return(
         <div className="productList-container">
            <div className="content-items">
                {products.map(product => (
                    <ProductCard key={product.id} />
                ))}
            </div>
         </div>
    );
}

export default ProductList;