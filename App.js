import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "./proyecto/Navigation";


export default function App(){
  return(
    <NavigationContainer>
    <Navigation></Navigation>
    </NavigationContainer>
  );
}