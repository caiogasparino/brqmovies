import { useCallback, useRef, useState } from "react";
import { useTheme } from "styled-components/native";
import { StackActions, useNavigation } from "@react-navigation/native";

import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
} from "react-native";

import { ONBOARDING_DATA } from "../../constants/onboarding-data";
import { FooterOnboarding } from "./components/footer-onboarding/footer-onboarding.component";
import { ItemCarousel } from "./components/item-carousel/item-carousel.component";

import { Container, Carousel } from "./onboarding.styles";
import { StatusBar } from "expo-status-bar";

const Onboarding: React.FC = () => {
    const { dispatch } = useNavigation();

    const {
        METRICS: {
            GLOBAL: { width },
        },
    } = useTheme();

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const contentOffset = event.nativeEvent.contentOffset.x;
            const index = Math.floor(contentOffset / width);
            const distanceFromIndex = contentOffset - index * width;

            if (distanceFromIndex > width / 3) {
                setCurrentIndex(index + 1);
            } else {
                setCurrentIndex(index);
            }
        },
        [],
    );

    const scrollToNextItem = useCallback(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < 3) {
            scrollViewRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        } else {
            dispatch(StackActions.replace("Login"));
        }
    }, [currentIndex]);

    return (
        <Container>
            <StatusBar style="light" />
            <Carousel
                ref={scrollViewRef}
                scrollEventThrottle={16}
                onScroll={handleScroll}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                horizontal
            >
                {ONBOARDING_DATA.map((item, index) => (
                    <ItemCarousel
                        key={item.id}
                        data={ONBOARDING_DATA[index]}
                        isFocused={currentIndex === index}
                    />
                ))}
            </Carousel>
            <FooterOnboarding
                scrollToNextItem={scrollToNextItem}
                currentIndex={currentIndex}
            />
        </Container>
    );
};

export { Onboarding };
