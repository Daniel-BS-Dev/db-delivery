import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
    const handleOnPress = () => {

    }

    return (
        <>
        <View style={styles.container}>
           <Image source={require('../../assets/deliveryman.png')} />
           <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
           <Text style={styles.subtitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
        </View>
        <View style={styles.footer}>
           <RectButton style={styles.button} onPress={handleOnPress}>
              <Text style={styles.buttonText}>VER PEDIDO</Text>
           </RectButton>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: '25%',
      alignItems: 'center',
    },

    title: {
     fontWeight: 'bold',
     fontSize: 26,
     lineHeight: 35,
     marginTop: 31,
     textAlign: 'center',
     letterSpacing: -0.24,
     color: '#263238'
    },

    subtitle: {
     paddingTop: 15,
     fontSize: 16,
     lineHeight: 22,
     textAlign: 'center',
     letterSpacing: -0.24,
     color: '#9E9E9E',
    },

    footer: {
      marginTop: 45,
      alignItems: 'center',

    },

    button : {
      backgroundColor: '#DA5C5C',
      borderRadius: 10,
    }, 

    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 25,
      textAlign: 'center',
      letterSpacing: -0.24,
      color: '#FFF',
    }
  });

export default Home;