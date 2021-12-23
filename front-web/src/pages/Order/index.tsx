import ProductSkeleton from "../../components/skelecton";
import OrderLocalization from "./OrderLocalization";
import { OrderLocationData, Product } from "./types";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { checkIsSelected } from "./helpers";
import OrderSummary from "./orderSummary";
import ProductList from "./ProductList";
import { fetchProducts, saveOrder } from "./api";
import StepsNav from "./stepsNav";
import "./styles.css";
import { toast } from "react-toastify";

const Order = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoader, setIsLoader] = useState(false);
  // para saber quais são os produtos selecionados
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  //estado que vai representar quando o usuario mudar a localização
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    setIsLoader(true);
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const finalValue = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0); // começa com 0

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const playload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(playload).then((response) => {
      toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
       toast.error('Erro ao enviar pedido');
      })
  }
  return (
    <>
      <div className="order-container">
        <StepsNav />
        {isLoader ? (
          <ProductSkeleton />
        ) : (
          <ProductList
            products={products}
            onSelectProduct={handleSelectProduct}
            selectedProducts={selectedProducts}
          />
        )}
        <OrderLocalization
          onChangeLocation={(location) => setOrderLocation(location)}
        />
        <OrderSummary
          amount={selectedProducts.length}
          totalPrice={finalValue}
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
};

export default Order;
