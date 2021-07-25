import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const FindScreen: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text>FindScreen</Text>
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