import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from "./proyecto/Navigation";
import messaging from '@react-native-firebase/messaging'; 
import  { useEffect } from 'react'

const  App: () => React$Node = () => {
  
    
   
  useEffect (() => {
    
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('push notification recibida',remoteMessage);
    });
    const topicSubscriber = messaging()
    .subscribeToTopic('topic_general').then(() => console.log("Subscrito"));
    const backGroundSubscriber = messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log(remoteMessage);
    });
   

    return () =>{
      unsubscribe();
      topicSubscriber();
      backGroundSubscriber();
     

    };
  }, []);
  return(
    <NavigationContainer>
    <Navigation></Navigation>
    </NavigationContainer>
  );
}
export default App;