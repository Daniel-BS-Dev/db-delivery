import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//para empilar as minhas rotas
const Stack = createStackNavigator();

const Routes = () => {
    return(
     <NavigationContainer>
       <Stack.Navigator>
           
       </Stack.Navigator>
     </NavigationContainer>
    );
}

export default Routes;