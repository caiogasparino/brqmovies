import { ButtonSmall } from "app/modules/un-logged/components/buttons/button-small/button-small.component";
import { Dots } from "../dots/dots.component";

import { Container, ContainerButton } from "./footer-onboarding.styles";

type FooterOnboardingProps = {
    currentIndex: number;
    scrollToNextItem(): void;
};

const FooterOnboarding: React.FC<FooterOnboardingProps> = ({
    currentIndex,
    scrollToNextItem,
}) => {
    return (
        <Container>
            <Dots currentIndex={currentIndex} />
            <ContainerButton>
                <ButtonSmall onPress={scrollToNextItem} />
            </ContainerButton>
        </Container>
    );
};

export { FooterOnboarding };
