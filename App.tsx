import "react-native-gesture-handler";

import { MyApp } from "app/my-app";

import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontLoaded]);

    if (!fontLoaded) {
        return null;
    }

    return <MyApp onLayout={onLayoutRootView} />;
}
