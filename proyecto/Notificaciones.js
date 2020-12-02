import React from 'react';

const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    console.log(fcmToken);
  };
  
  const requestPermission = async () =>
    firebase
      .messaging()
      .requestPermission()
      .then(() => {
        getToken();
      })
      .catch(error => {
        console.warn(`${error} permission rejected`);
      });
  
  
  export const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };
  const notificationListener = () =>
  firebase.notifications().onNotification(notification => {
    const {
      notifications: {
        Android: {
          Priority: { Max }
        }
      }
    } = firebase;
    notification.android.setChannelId(CHANNEL_NOTIFICATIONS.CHANNEL_ID);
    notification.android.setPriority(Max);
    notification.setData(notification.data);
    firebase.notifications().displayNotification(notification);
  });
  
//ejecutar alguna acción pero tu aplicación está cerrada o en segundo plano
  /*export const notificationOpenBackListener = () => {
    const { dispatch, isLoggedIn } = props;
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      // Agregar el codigo que se considere necesario
    }
  };*/

  //Canales
  
export const createChannel = () => {
    const channel = new firebase.notifications.Android.Channel(
      CHANNEL_NOTIFICATIONS.CHANNEL_ID,
      CHANNEL_NOTIFICATIONS.CHANNEL_NAME,
      firebase.notifications.Android.Importance.Max
    ).setDescription(CHANNEL_NOTIFICATIONS.CHANNEL_DESCRIPTION);
    firebase.notifications().android.createChannel(channel);
  };