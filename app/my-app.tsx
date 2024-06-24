import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./shared/providers/app-provider";
import { Routes } from "./shared/routes";
import { View } from "react-native";

const MyApp: React.FC<{ onLayout: () => void }> = ({ onLayout }) => {
    return (
        <AppProvider>
            <View style={{ flex: 1 }} onLayout={onLayout}>
                <StatusBar translucent />
                <Routes />
            </View>
        </AppProvider>
    );
};

export { MyApp };
