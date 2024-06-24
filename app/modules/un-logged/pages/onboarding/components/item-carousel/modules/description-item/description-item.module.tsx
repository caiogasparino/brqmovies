import { useEffect } from "react";
import { RFValue } from "app/shared/libs/font-size/font-size";
import {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
} from "react-native-reanimated";

import {
    Container,
    TitleOnboarding,
    DescriptionOnboarding,
    ContainerAnimated,
} from "./description-item.styles";

type DescriptionItemProps = {
    title: string;
    description: string;
    isFocused: boolean;
};

const INITIAL_OFFSET_X = RFValue(-50);
const DURATION_ANIMATION = 350;

const DescriptionItem: React.FC<DescriptionItemProps> = ({
    description,
    title,
    isFocused,
}) => {
    const opacityTitle = useSharedValue(0);
    const opacitySubTitle = useSharedValue(0);
    const offsetTitleX = useSharedValue(INITIAL_OFFSET_X);
    const offsetSubTitleX = useSharedValue(INITIAL_OFFSET_X);

    useEffect(() => {
        const durationTitle = DURATION_ANIMATION;
        const durationSubTitle = DURATION_ANIMATION;
        const delayTitle = DURATION_ANIMATION;
        const delaySubTitle = DURATION_ANIMATION * 2;

        opacityTitle.value = withDelay(
            delayTitle,
            withTiming(isFocused ? 1 : 0, { duration: durationTitle }),
        );
        offsetTitleX.value = withDelay(
            delayTitle,
            withTiming(isFocused ? 0 : INITIAL_OFFSET_X, {
                duration: durationTitle,
            }),
        );

        opacitySubTitle.value = withDelay(
            delaySubTitle,
            withTiming(isFocused ? 1 : 0, { duration: durationSubTitle }),
        );
        offsetSubTitleX.value = withDelay(
            delaySubTitle,
            withTiming(isFocused ? 0 : INITIAL_OFFSET_X, {
                duration: durationSubTitle,
            }),
        );
    }, [isFocused]);

    const animatedTitleStyle = useAnimatedStyle(() => ({
        opacity: opacityTitle.value,
        transform: [{ translateX: offsetTitleX.value }],
    }));

    const animatedSubTitleStyle = useAnimatedStyle(() => ({
        opacity: opacitySubTitle.value,
        transform: [{ translateX: offsetSubTitleX.value }],
    }));

    return (
        <Container>
            <ContainerAnimated style={animatedTitleStyle}>
                <TitleOnboarding variant="H1">{title}</TitleOnboarding>
            </ContainerAnimated>

            <ContainerAnimated style={animatedSubTitleStyle}>
                <DescriptionOnboarding variant="P1">
                    {description}
                </DescriptionOnboarding>
            </ContainerAnimated>
        </Container>
    );
};

export { DescriptionItem };
