import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const AnimatedView = Animated.createAnimatedComponent(View);

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
    justify-content: center;
    align-items: center;
`;

export const Content = styled(AnimatedView)``;

export const TitleOnboarding = styled(TextDefault)`
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BASE[100]};
    font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x24}px;
`;
