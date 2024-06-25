import { render, RenderAPI } from "@testing-library/react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { THEME_LIGHT } from "app/shared/design/themes/theme-light";
import { ThemeProvider } from "styled-components";

const renderWithProviders = (component: React.ReactElement): RenderAPI => {
    return render(
        <NavigationContainer>
            <SafeAreaProvider>
                <ThemeProvider theme={THEME_LIGHT}>{component}</ThemeProvider>
            </SafeAreaProvider>
        </NavigationContainer>,
    );
};

export { renderWithProviders };
