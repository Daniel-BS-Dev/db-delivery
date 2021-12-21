import Footer from '../../components/Footer';
import OrderLocalization from './OrderLocalization';
import ProductList from './ProductList';
import StepsNav from './stepsNav';
import './styles.css';

const Order = () => {
    return(
      <div className='order-container'>
         <StepsNav />
         <ProductList />
         <OrderLocalization />
      </div>
    );
}

export default Order;