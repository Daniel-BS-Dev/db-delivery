import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Text, Alert} from "react-native";
import { useIsFocused, useNavigation  } from "@react-navigation/native";
import OrderCard from '../../components/OrderCard';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { fetchOrders } from '../../api';
import { Order } from "../../types";


const Orders = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused(); // força o recarrgamento da pagina 

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
    .then(response => setOrder(response.data))
    .catch(() => Alert.alert('Houve uma erro'))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const navigation = useNavigation();

  function handleOnPress(order: Order){
     navigation.navigate('OrderDetails', {order});
  }
    return (
      <>
         <Header />
         <ScrollView style={styles.container}>
            {isLoading ? (
               <Text style={styles.text}> Carregando... </Text>
               ) : ( order.map(order => (
              <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
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