/*
//================================================================================================================
//! THÔNG TIN CHUNG

  Khai báo các tabs ở footer và điều hướng đến các màn hình
//================================================================================================================
*/
//stack
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './screens/MyStack'
/*
|-------------------------------------------------------------------------------------------------------------- *
|//! 1. Khai báo thư viện & cấu hình chung
|-------------------------------------------------------------------------------------------------------------- *
*/
import React, { useState, useEffect, useRef } from 'react';
import {
  
  View,
  Platform 

} from 'react-native';
import 'react-native-gesture-handler';

//====================================Notifications==========================================
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

//==============================================================================NotificationsCode==============================================================================
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
Notifications.scheduleNotificationAsync({
  content: {
    title: "Absolute Fitness",
    body: 'Mình cùng nhau đóng băng 3',
    sound: true,
  },
  trigger: {
    seconds: 10,
  }
});

// Notifications.cancelAllScheduledNotificationsAsync()

export default function App() {
 
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
        <View style={{ flex: 1, width: '100%', height:'100%'}}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </View>   
  );
}

async function registerForPushNotificationsAsync() {
  let token
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

//==============================================================================NotificationsCode==============================================================================




