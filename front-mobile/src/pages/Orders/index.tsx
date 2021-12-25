import React from 'react';
import { StyleSheet, ScrollView} from "react-native";
import OrderCard from '../../OrderCard';
import Header from '../Header';

const Orders = () => {
    return (
      <>
         <Header />
         <ScrollView style={styles.container}>
            <OrderCard /> 
            <OrderCard /> 
            <OrderCard /> 
            <OrderCard /> 
            <OrderCard /> 
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