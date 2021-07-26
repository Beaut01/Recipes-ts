import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

interface MainScreenProps{
    navigation: any
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>MainScreen</Text>
            <Button title='Нажми' onPress={() => navigation.navigate('Recipe')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})