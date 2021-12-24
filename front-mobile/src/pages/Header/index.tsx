import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}/>
        <Text style={styles.image}>DB DELIVERY</Text>
    </View> 
);

const styles = StyleSheet.create({
    container: {
        height: 90,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#DA5C5C',

    },
    image: {
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#fff',
        fontFamily: 'OpenSans_700Bold',
    },
});
  

export default Header;