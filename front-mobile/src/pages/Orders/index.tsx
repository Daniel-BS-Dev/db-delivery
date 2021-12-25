import { StyleSheet, ScrollView, Alert} from "react-native";
import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../api';
import OrderCard from '../../OrderCard';
import { Order } from "../../types";
import Header from '../Header';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Orders = () => {
  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders()
    .then(response => setOrder(response.data))
    .catch(() => Alert.alert('Houve uma erro'));
  }, []);
    return (
      <>
         <Header />
         <ScrollView style={styles.container}>
            {order.map(order => (
              <TouchableWithoutFeedback key={order.id}>
                <OrderCard order={order}/> 
              </TouchableWithoutFeedback>
            ))}
         </ScrollView>
               
      </>
     
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5F5F5',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
  });

export default Orders;