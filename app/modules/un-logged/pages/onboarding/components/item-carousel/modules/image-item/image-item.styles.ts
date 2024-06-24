import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const AnimatedView = Animated.createAnimatedComponent(View);

export const Container = styled(AnimatedView)`
    align-items: center;
`;
