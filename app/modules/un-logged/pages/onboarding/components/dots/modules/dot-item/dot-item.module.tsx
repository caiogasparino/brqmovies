import { useEffect } from "react";

import {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { Container, DOT_SIZE } from "./dot-item.styles";

type DotItemProps = {
    isFocused: boolean;
};

const DotItem: React.FC<DotItemProps> = ({ isFocused }) => {
    const focusedValue = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        width: interpolate(
            focusedValue.value,
            [0, 1],
            [DOT_SIZE, DOT_SIZE * 3],
        ),
    }));

    useEffect(() => {
        focusedValue.value = withTiming(isFocused ? 1 : 0, {
            duration: 300,
        });
    }, [isFocused]);

    return <Container style={animatedStyle} />;
};

export { DotItem };
