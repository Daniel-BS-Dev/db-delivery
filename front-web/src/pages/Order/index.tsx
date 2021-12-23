import OrderLocalization from './OrderLocalization';
import Footer from '../../components/Footer';
import { OrderLocationdata} from './types';
import OrderSummary from './orderSummary';
import ProductList from './ProductList';
import StepsNav from './stepsNav';
import { useState } from 'react';
import './styles.css';


const Order = () => {

  //estado que vai representar quando o usuario mudar a localização
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  const finalValue = ProductList.prototype(pro).reduce((sum, item) => {
    return sum + item.price;
  }, 0);// começa com 0

    return(
      <>
      <div className='order-container'>
         <StepsNav />
         <ProductList />
         <OrderLocalization onChangeLocation={location => setOrderLocation(location)}/>
         <OrderSummary amount={} totalPrice={finalValue}/>
      </div>
      <Footer />
      </>
    );
}

export default Order;