import React from 'react';
import {Button, StyleSheet, View} from "react-native";

const RegistrationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
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
        background: '#F6F6F6',
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

export default RegistrationScreen;