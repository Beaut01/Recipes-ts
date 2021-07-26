import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { MainStack } from './MainStack'
import { AddScreen } from '../pages/AddScreen'
import { FindScreen } from '../pages/FindScreen'

const Tab = createMaterialBottomTabNavigator()

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    component={MainStack}
                    name='Main'
                    options={{
                        title: 'Главная'
                    }}
                />
                <Tab.Screen 
                    component={AddScreen}
                    name='Add'
                    options={{
                        title: 'Добавить'
                    }}
                />
                <Tab.Screen 
                    component={FindScreen}
                    name='Find'
                    options={{
                        title: 'Найти'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}