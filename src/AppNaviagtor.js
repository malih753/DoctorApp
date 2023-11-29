import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import BookAppoint from './Screens/BookAppoint';
import Success from './Screens/Success';
import Pending from './Screens/Pending';
import CallAmb from './Screens/CallAmb';
import Completed from './Screens/Completed';

const Stack = createNativeStackNavigator();

function AppNaviagtor() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookAppoint"
          component={BookAppoint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CallAmb"
          component={CallAmb}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNaviagtor;
