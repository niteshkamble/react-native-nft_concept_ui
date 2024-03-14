import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './src/pages/App';
import Dashboard from './src/pages/Dashboard';

function Navigation(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App" component={App} options={{headerShown:false}} />
          <Stack.Screen name="dashboard" component={Dashboard} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default Navigation;
