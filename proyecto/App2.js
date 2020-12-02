/*import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "./proyecto/Navigation";
import messaging from '@react-native-firebase/messaging'; 
import  { useEffect } from 'react'
import { checkPermission } from './proyecto/Notificaciones';


export default class App extends  Component{
  componentDidMount(){
    checkPermission();
    notificationListener();
    
    //notificationOpenBackListener();
    createChannel();
  };
  render() {
    return (
      <NavigationContainer>
      <Navigation></Navigation>
      </NavigationContainer>
    )
  }
}
