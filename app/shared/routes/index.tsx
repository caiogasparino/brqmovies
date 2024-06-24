import { AppRoutes } from "./app.routes";

import { NavigationContainer } from "@react-navigation/native";

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
};

export { Routes };
