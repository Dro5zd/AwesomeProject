import {StyleSheet, ImageBackground, View} from 'react-native';
import {LoginScreen} from "./Screens/LoginScreen";
import bgImage from './assets/PhotoBG.jpg'
import {NavigationContainer} from '@react-navigation/native';

import RegistrationScreen from "./Screens/RegistrationScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
        <View style={styles.container}>
            <ImageBackground
                source={bgImage}
                style={styles.image}
            >
            </ImageBackground>
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
        </View>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },
});
