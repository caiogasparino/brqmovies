import { useEffect } from "react";
import { RFValue } from "app/shared/libs/font-size/font-size";
import { StackActions, useNavigation } from "@react-navigation/native";

import {
    FadeInLeft,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import AppIconSvg from "app/modules/un-logged/assets/svgs/app-icon.svg";

import { Container, Content, TitleOnboarding } from "./splash-screen.styles";
import { StatusBar } from "expo-status-bar";

const SplashScreen: React.FC = () => {
    const { dispatch } = useNavigation();

    const offsetYIcon = useSharedValue(30);

    const styledAnimated = useAnimatedStyle(() => ({
        transform: [{ translateY: offsetYIcon.value }],
    }));

    useEffect(() => {
        offsetYIcon.value = withSpring(RFValue(-20), {
            duration: 600,
        });
    }, []);

    useEffect(() => {
        const interval = setTimeout(() => {
            dispatch(StackActions.replace("Onboarding"));
        }, 2000);

        return () => {
            clearTimeout(interval);
        };
    }, []);

    return (
        <Container>
            <StatusBar style="light" />
            <Content style={styledAnimated}>
                <AppIconSvg width={RFValue(220)} height={RFValue(220)} />
            </Content>

            <Content entering={FadeInLeft.delay(400).duration(400)}>
                <TitleOnboarding variant="H1">
                    Brq Movies{"\n"} sua plataforma de filmes
                </TitleOnboarding>
            </Content>
        </Container>
    );
};

export { SplashScreen };
