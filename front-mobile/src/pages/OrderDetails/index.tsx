import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { Order } from '../../types';
import OrderCard from '../../components/OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { confirmDelivery } from '../../api';
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

  const navegation = useNavigation();
// button cancelar
  function handleCancel(){
    navegation.navigate('Orders');
  }
//button confirmar
   function handleConfirmDelivery(){
     confirmDelivery(order.id)
     .then(() => {
       Alert.alert(`Pedido ${order.id} entregue com sucesso`);
       navegation.navigate('Orders');
     })
     .catch(() => {
       Alert.alert(`Houve um erro ao confirmar Pedido ${order.id}`)
     })
   }

   function handleNavegation(){
     Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
   }

    return(
        <>
          <Header />
          <View style={styles.container}> 
            <OrderCard order={order} />
            <RectButton style={styles.containerButton}>
              <Text style={styles.textButton} onPress={handleNavegation}>INICIAR NAVEGAÇÃO</Text>
            </RectButton>
            <RectButton style={styles.containerButton}>
              <Text style={styles.textButton} onPress={handleConfirmDelivery}>CONFIRMAR ENTREGA</Text>
            </RectButton>
            <RectButton style={styles.containerButton} onPress={handleCancel}>
              <Text style={styles.textButton}>CANCELAR</Text>
            </RectButton>
          </View>
        </>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },

  containerButton: {
    backgroundColor: '#DA5C5C',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    letterSpacing: -0.24,
    fontFamily: 'OpenSans_700Bold'
  }

});

export default OrderDetails;