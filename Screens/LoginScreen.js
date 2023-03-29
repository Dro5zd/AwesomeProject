import React, {useState} from 'react';
import bgImage from '../assets/PhotoBG.jpg'
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export const LoginScreen = ({navigation}) => {
    const [value, setValue] = useState('');
    const inputHandler = (text) => {
        setValue(text)
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={bgImage}
                style={styles.image}
            >
                <View style={styles.form}>
                    <Text style={styles.formTitle}>Увійти</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Електронна адреса"
                        value={value}
                        onChangeText={inputHandler}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Пароль"
                        secureTextEntry
                        value={value}
                        onChangeText={inputHandler}
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnTitle}>Увійти</Text>
                    </TouchableOpacity>
                    <Text
                        style={styles.formLink}
                        onPress={() => navigation.navigate("Register")}
                    >Немає акаунту? Зареєструватися</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    form: {
        backgroundColor: '#fff',
        paddingTop: 32,
        paddingBottom: 144,
        marginTop: 'auto',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
    },
    formTitle: {
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: '#212121',
        marginBottom: 33
    },
    input: {
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        height: 50,

    },
    btn: {
        backgroundColor: '#FF6C00',
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 100,
        alignItems: 'center',
        marginTop: 27,

    },
    btnTitle: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
    },
    formLink: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: '#1B4371',
        marginTop: 16
    }
});