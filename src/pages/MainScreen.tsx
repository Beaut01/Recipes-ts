import React from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { Recipe } from '../components/Recipe'
import { DATA } from '../data'

interface MainScreenProps{
    navigation: any
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    return(
        <View>
            <FlatList 
                data={DATA}
                keyExtractor={item=> item.id.toString()}
                renderItem={({item}) => <Recipe />}
            />
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