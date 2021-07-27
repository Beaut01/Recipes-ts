import React from 'react'
import { View, StyleSheet, FlatList, Alert} from 'react-native'
import { useDispatch } from 'react-redux'
import { Recipe } from '../components/Recipe'
import { DATA } from '../data'

interface MainScreenProps{
    navigation: any
}

export const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
    const dispatch = useDispatch()

    const handleOpenRecipe = (recipe: any) => {
        navigation.navigate('Recipe',{
            recipeId: recipe.id,
            recipeTitle: recipe.name
        })
    }

    const handleDeleteRecipe = (id: number) => {
        Alert.alert(
            "Удаление рецепта.",
            "Вы точно хотите удалить этот рецепт ?",
            [
                {
                    text: "Закрыть",
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress(){
                        console.log(id)
                    }
                }
            ],
            { cancelable: true }
        )
    }

    return(
        <View>
            <FlatList 
                data={DATA}
                keyExtractor={item=> item.id.toString()}
                renderItem={({item}) => <Recipe recipe={item} onOpen={handleOpenRecipe} onDelete={handleDeleteRecipe}/>}
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