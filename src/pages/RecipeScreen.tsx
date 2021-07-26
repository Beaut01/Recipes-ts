import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const RecipeScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>RecipeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})