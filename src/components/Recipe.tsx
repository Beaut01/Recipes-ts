import React from 'react'
import { TouchableNativeFeedback, View, ImageBackground, Text, StyleSheet } from 'react-native'

interface RecipeItem{
    id: number,
    name: string,
    imageURL: string,
    ingredients: string,
    description: string,
    category: number
}

interface RecipeProps{
    onOpen: any,
    onDelete: any,
    recipe: RecipeItem
}

export const Recipe: React.FC<RecipeProps> = ({recipe, onOpen, onDelete}) => {
    return(
        <TouchableNativeFeedback>
            <View style={styles.recipe}>
                <ImageBackground style={styles.image} source={{uri: 'https://static.1000.menu/img/content/25349/pravilnyi-steik-iz-govyadiny_1518083846_13_max.jpg'}}>
                    <View style={styles.textWrapp}>
                        <Text style={styles.title}>Стейк</Text>
                    </View>
                </ImageBackground>
                <View style={styles.ingr}>
                    <Text>Ингредиенты</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 250,
        width: '100%',
    },
    recipe:{
        width: '100%',
        overflow: 'hidden',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#fff',
        height: 'auto'
    },
    title:{
        color: '#fff',
        fontSize: 18
    },
    textWrapp:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    ingr:{
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})