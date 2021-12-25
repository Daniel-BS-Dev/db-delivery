import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetails from './pages/OrderDetails';
import Orders from './pages/Orders';
import Home from './pages/Home';
import React from 'react';



const Stack = createStackNavigator();

const Routes = () => {
    return(
     <NavigationContainer>
       <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown:false,
            cardStyle: {
               backgroundColor: '#fff'
            }
          }} 
       >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
       </Stack.Navigator>
     </NavigationContainer>
     
    );
}

export default Routes;