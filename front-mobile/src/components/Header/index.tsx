import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
     navigation.navigate('Home');
  }

   return(
      <TouchableWithoutFeedback onPress={handleOnPress}>
         <View style={styles.container}>
           <Image source={require('../../assets/logo.png')}/>
           <Text style={styles.image}>DB DELIVERY</Text>
         </View> 
      </TouchableWithoutFeedback>
 );
}
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