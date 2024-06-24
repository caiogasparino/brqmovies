import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login/login.pages";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthScreen: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Login" component={Login} />
        </Navigator>
    );
};

export { AuthScreen };
