import React from 'react';
import { Text, StyleSheet } from "react-native";
import Header from '../Header';

const Orders = () => {
    return (
      <>
         <Header />
         <Text>Orders</Text>
      </>
     
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
  });

export default Orders;