import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import 'react-native-gesture-handler';

//stack
import { createStackNavigator } from '@react-navigation/stack';

//LoginScreen
import Login1 from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import Loading from '../screens/LoadingScreen'
import Sex from '../screens/SexScreen'
import Goal from '../screens/GoalScreen'
import Start from '../screens/StartScreen'
import Exercise1 from '../screens/Exercise1Screen'
import Exercise2 from '../screens/Exercise2Screen'
import Exercise3 from '../screens/Exercise3Screen'
import ListExercise from '../screens/ListExerciseScreen'
import ImagePickerExample from '../Component/ImagePicker'

import Calories from '../screens/Calories'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon2 from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login1} />
            <Stack.Screen name="Sex" component={Sex} />
            <Stack.Screen name="Goal" component={Goal} />
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
            <Stack.Screen name="Exercise1" component={Exercise1} />
            <Stack.Screen name="Exercise2" component={Exercise2} />
            <Stack.Screen name="Exercise3" component={Exercise3} />
            <Stack.Screen name="ListExercise" component={ListExercise} />
        </Stack.Navigator>
    );
}

export default MyStack

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MyTabs} />
            <Drawer.Screen name="Home2" component={Exercise1} />
        </Drawer.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#fff"
            labelStyle={{ fontSize: 12 }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#828543',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Exercise"
                component={ListExercise}
                options={{
                    tabBarLabel: 'Exercise',
                    tabBarColor: '#9579A7',
                    tabBarIcon: ({ color }) => (
                        <Icon2 name="tasks" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calories"
                component={Calories}
                options={{
                    tabBarLabel: 'Calories',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="history" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ImagePickerExample}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: 'rgb(214, 174, 123)',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
}

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </View>
    );
}

function Article() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </View>
    );
}
