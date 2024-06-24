import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/home/home.page";
import { Movie } from "../pages/movie/movie.page";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="MovieDetails" component={Movie} />
        </Navigator>
    );
};

export { HomeScreen };
