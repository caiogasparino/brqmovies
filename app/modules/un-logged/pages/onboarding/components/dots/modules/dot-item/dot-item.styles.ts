import { RFValue } from "app/shared/libs/font-size/font-size";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const AnimatedView = Animated.createAnimatedComponent(View);

export const DOT_SIZE = RFValue(10);

export const Container = styled(AnimatedView)`
    height: ${DOT_SIZE}px;
    border-radius: ${DOT_SIZE / 2}px;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL[200]};
    margin-right: ${({ theme }) => theme.METRICS.MARGIN.x8}px;
`;
