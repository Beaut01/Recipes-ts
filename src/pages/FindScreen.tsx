import React from 'react'
import { View, FlatList, StyleSheet, TextInput} from 'react-native'
import { Recipe } from '../components/Recipe'
import { DATA } from '../data'

export const FindScreen: React.FC = () => {
    const [value, onChangeValue] = React.useState('')

    const filteredRecipes = DATA.filter(r => r.name.toLowerCase().includes(value.toLowerCase()))
    return(
        <View>
            <TextInput 
                style={styles.input} 
                value={value} 
                onChangeText={text => onChangeValue(text)}
                placeholder='Поиск по названию' 
            />
            <FlatList 
                data={filteredRecipes}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Recipe />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000',
        width: '95%',
        height: 40,
        marginTop: 40,
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: '2.5%',
        marginBottom: 10
    }
})