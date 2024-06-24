import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SplashScreen } from "../pages/splash-screen/splash-screen.page";
import { Onboarding } from "../pages/onboarding/onboarding.page";

const { Navigator, Screen } = createNativeStackNavigator();

const UnLoggedRoutes: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="SplashScreen" component={SplashScreen} />
            <Screen name="Onboarding" component={Onboarding} />
        </Navigator>
    );
};

export { UnLoggedRoutes };
