import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const ContainerAnimatedText = Animated.createAnimatedComponent(View);

export const Container = styled.View`
    align-items: center;
    width: 100%;
`;

export const ContainerAnimated = styled(ContainerAnimatedText)``;

export const TitleOnboarding = styled(TextDefault)`
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BASE[100]};
`;

export const DescriptionOnboarding = styled(TextDefault)`
    text-align: center;
    font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x18}px;
    margin-top: ${({ theme }) => theme.METRICS.MARGIN.x12}px;
`;
