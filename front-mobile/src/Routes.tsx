import React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './pages/Orders';
import Home from './pages/Home';


//para empilar as minhas rotas
const Stack = createStackNavigator();

const Routes = () => {
    return(
     <NavigationContainer>
       <Stack.Navigator
         screenOptions={{
             cardStyle: {
                 backgroundColor: '#FFF'
             }
         }}
       >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Orders" component={Orders} />
       </Stack.Navigator>
     </NavigationContainer>
     
    );
}

export default Routes;