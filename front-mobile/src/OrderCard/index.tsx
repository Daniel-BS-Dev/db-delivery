import {StyleSheet, View, Text} from "react-native";
import relativeTime from 'dayjs/plugin/relativeTime';
import { Order } from "../types";
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import React from 'react';
import "intl";
import { Platform } from "react-native";
import "intl/locale-data/jsonp/en";


dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Props = {
    order: Order;
   
}
//formatar data
function dateFormat(date: string){
  return dayjs(date).fromNow();
}
//para que o intl funcione. tento que baixar as dependencias
if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}

//formatar priço
function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

const OrderCard = ({order}: Props) => {
    return(
        <View style={styles.container}>
           <View style={styles.header}>
              <Text style={styles.orderName}>Pedido {order.id}</Text>  
              <Text style={styles.orderPrice}>{formatPrice(order.totalPrice)}</Text>
           </View>
              <Text style={styles.text}>{dateFormat(order.moment)}</Text>
           <View style={styles.productsList}>
               {order.listProductDTO.map(product => (
                   <Text key={product.id} style={styles.text}>{product.name}</Text>
               ))}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: '10%',
      marginLeft: '2%',
      marginRight: '2%',
      marginBottom: '2%',
      padding: 15,
      backgroundColor: '#FFF',
      shadowOpacity: 0.25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 20,
      borderRadius: 10,
      elevation: 5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 19,
      letterSpacing: -0.24,
      color: '#9E9E9E',
      fontFamily: 'OpenSans_400Regular'
    },
    orderName: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      letterSpacing: -0.24,
      color: '#263238',
      fontFamily: 'OpenSans_700Bold'
    },
    orderPrice: {
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      textAlign: 'right',
      letterSpacing: -0.24,
      color: '#DA5C5C',
      fontFamily: 'OpenSans_700Bold'
    },
    productsList: {
      borderTopColor: '#E6E6E6',
      borderTopWidth: 1,
      marginTop: 20,
      paddingTop: 15
    }
  });

export default OrderCard;