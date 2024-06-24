import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { THEME_LIGHT } from "../design/themes/theme-light";
import { PaperProvider } from "react-native-paper";

type AppProviderProps = {
    children: ReactElement;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
                <SafeAreaProvider style={{ flex: 1 }}>
                    <ThemeProvider theme={THEME_LIGHT}>
                        {children}
                    </ThemeProvider>
                </SafeAreaProvider>
            </PaperProvider>
        </GestureHandlerRootView>
    );
};

export { AppProvider };
