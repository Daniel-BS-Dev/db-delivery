import Footer from '../../components/Footer';
import ProductList from './ProductList';
import StepsNav from './stepsNav';
import './styles.css';

const Order = () => {
    return(
      <div className='order-container'>
         <StepsNav />
      <div className='CradProduct'>
         <ProductList />
      </div>
      </div>
    );
}

export default Order;