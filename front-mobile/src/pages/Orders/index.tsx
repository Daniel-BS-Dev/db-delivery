import { StyleSheet, ScrollView, Text, Alert} from "react-native";
import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../api';
import OrderCard from '../../OrderCard';
import { Order } from "../../types";
import Header from '../Header';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Orders = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrder(response.data))
    .catch(() => Alert.alert('Houve uma erro'))
    .finally(() => setIsLoading(false));
  }, []);
    return (
      <>
         <Header />
         <ScrollView style={styles.container}>
            {isLoading ? (
               <Text style={styles.text}> Carregando... </Text>
               ) : ( order.map(order => (
              <TouchableWithoutFeedback key={order.id}>
                <OrderCard order={order}/> 
              </TouchableWithoutFeedback>
            )))}
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

    text: {
     marginTop: '50%',
     marginLeft: '5%',
     fontWeight: 'bold',
     fontSize: 26,
     lineHeight: 35,
     textAlign: 'center',
     letterSpacing: -0.24,
     color: '#263238',
     fontFamily: 'OpenSans_700Bold'
    },
  });

export default Orders;