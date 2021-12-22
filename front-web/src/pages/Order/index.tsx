import { useState } from 'react';
import Footer from '../../components/Footer';
import OrderLocalization from './OrderLocalization';
import ProductList from './ProductList';
import StepsNav from './stepsNav';
import './styles.css';
import { OrderLocationdata } from './types';

const Order = () => {

  //estado que vai representar quando o usuario mudar a localização
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    return(
      <div className='order-container'>
         <StepsNav />
         <ProductList />
         <OrderLocalization onChangeLocation={location => setOrderLocation(location)}/>
      </div>
    );
}

export default Order;