import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, TextInput, Picker, TouchableOpacity} from 'react-native'

export const AddScreen: React.FC = () => {
    const [name, onChangeName] = React.useState('')
    const [selectedValue, setSelectedValue] = React.useState(0)
    const [ingr, onChangeIngr] = React.useState('')
    const [descr, onChangeDescr] = React.useState('')

    return(
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Напишите рецепт!</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeName(text)}
                        placeholder='Введите название блюда'
                        value={name} 
                    />
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label='Мясные' value={0} />
                            <Picker.Item label='Вегетарианские' value={1} />
                            <Picker.Item label='Сырные' value={2} />
                            <Picker.Item label='Острые' value={3} />
                            <Picker.Item label='Сладкие' value={4} />
                            <Picker.Item label='Выпечка' value={5} />
                            <Picker.Item label='Супы' value={6} />
                        </Picker>
                    </View>
                    <TextInput 
                        style={styles.input}
                        placeholder='Напишите нужные ингредиенты'
                        value={ingr}
                        onChangeText={text => onChangeIngr(text)}
                        multiline
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Опишите процесс приготовления'
                        multiline
                        value={descr}
                        onChangeText={text => onChangeDescr(text)}
                    />
                    <View style={styles.center}>
                        <TouchableOpacity style={styles.buttonWrapper}>
                            <Text style={styles.button}>Добавить рецепт</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 45
    },
    title: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        padding: 10,
        marginBottom: 10
    },
    picker:{
        height: 35,
        width: '50%',
        color: '#9575cd'
    },
    pickerContainer:{
        paddingBottom: 10,
        display: 'flex',
    },
    center:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        elevation: 8,
        backgroundColor: "#9575cd",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    button: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: "center",
    }
})