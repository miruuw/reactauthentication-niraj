import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppForm from './components/AppForm'
import { useLogin } from './context/LoginProvider'

const MainNavigator = () => {
    // const { isLoggedIn } =  useLogin();
    return <StackNavigator/>
    
}

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={AppForm} name='AppForm' />
        </Stack.Navigator>
    )
}

export default MainNavigator