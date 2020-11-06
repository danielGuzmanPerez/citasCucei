import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import User from './User';
import Formato from './Bajas2';

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{title: 'CITAS'}}/>
            <Stack.Screen name="User" component={User} options={{title: 'BIENVENIDO', headerMode:'none',headerShown: false,}} />
            <Stack.Screen  name="Formato" component={Formato} options={{headerMode: 'none', headerShown: false}}/>
        </Stack.Navigator>
    );
}