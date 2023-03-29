import {LoginScreen} from "./Screens/LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {RegistrationScreen} from "./Screens/RegistrationScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name="Register"
                    component={RegistrationScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Login"
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
