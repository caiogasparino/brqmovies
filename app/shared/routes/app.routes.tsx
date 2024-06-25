import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "app/modules/auth/pages/login/login.pages";
import { HomeScreen } from "app/modules/home/routes/home.routes";
import { UnLoggedRoutes } from "app/modules/un-logged/routes/un-logged.routes";

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="UnLoggedRoutes" component={UnLoggedRoutes} />
            <Screen name="Login" component={Login} />
            <Screen name="HomeScreen" component={HomeScreen} />
        </Navigator>
    );
};

export { AppRoutes };
