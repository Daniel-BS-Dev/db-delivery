import { Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { Order } from '../../types';
//pegando uma order que esta atrelada a uma rota
type Props = {
  route : {
    params :{
      order: Order
    }
  }
}

const OrderDetails = ({ route } : Props) => {
  const { order } = route.params;

    return(
        <>
          <Header />
          <View>
            <Text>{order.id}</Text>
          </View>
        </>
    );
}

export default OrderDetails;