import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from './src/CameraScreen.tsx';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen.tsx";
import Firstscreen from "./src/Firstscreen.tsx";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="First" component={Firstscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
