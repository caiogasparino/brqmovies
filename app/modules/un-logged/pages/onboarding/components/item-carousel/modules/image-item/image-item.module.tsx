import { FC, useEffect } from "react";
import { SvgProps } from "react-native-svg";
import { RFValue } from "app/shared/libs/font-size/font-size";

import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { Container } from "./image-item.styles";

type ImageItemProps = {
    icon: FC<SvgProps>;
    isFocused: boolean;
};

const INITIAL_OFFSET_Y = RFValue(-40);

const ImageItem: React.FC<ImageItemProps> = ({ icon: Icon, isFocused }) => {
    const opacity = useSharedValue(0);
    const offsetY = useSharedValue(INITIAL_OFFSET_Y);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: offsetY.value }],
    }));

    useEffect(() => {
        opacity.value = withTiming(isFocused ? 1 : 0, { duration: 500 });
        offsetY.value = withTiming(isFocused ? 0 : INITIAL_OFFSET_Y, {
            duration: 300,
        });
    }, [isFocused]);

    return (
        <Container style={animatedStyle}>
            <Icon width={300} height={300} />
        </Container>
    );
};

export { ImageItem };
