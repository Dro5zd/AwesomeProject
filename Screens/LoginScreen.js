import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export const LoginScreen = ({navigation}) => {
    const [value, setValue] = useState('');
    const inputHandler = (text) => {
        setValue(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <Text>Увійти</Text>
            <TextInput
                style={styles.input}
                placeholder="Електронна адреса"
                value={value}
                onChangeText={inputHandler}
            />
            <TextInput
                style={styles.input}
                placeholder="Пароль"
                value={value}
                onChangeText={inputHandler}
            />
                <TextInput
                style={styles.input}
                placeholder="Пароль"
                value={value}
                onChangeText={inputHandler}
            />
            </View>
                <Button
                    style={styles.button}
                    title="Go to Register"
                    onPress={() => navigation.navigate("Register")}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    form: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // width: 400,
        // height: 489
    },
    input: {
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor:  '#E8E8E8',
        borderRadius: 8,
        height: 50,
        marginHorizontal: 36
    },
    button: {
        height: 100,
        width: 300,
        color: 'red'
    }
});