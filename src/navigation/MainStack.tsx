import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../pages/MainScreen'
import { RecipeScreen } from '../pages/RecipeScreen'

const Stack = createStackNavigator()

export const MainStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={MainScreen}
                options={{
                    title: 'Рецептник',
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#9575cd'}
                }}
            />
            <Stack.Screen 
                name='Recipe'
                component={RecipeScreen}
                options={{
                    title: 'Рецепт',
                    headerStyle: {backgroundColor: '#9575cd'},
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    )
}