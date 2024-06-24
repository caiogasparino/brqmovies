import { Container, TextButton } from "./button-small.styles";

type ButtonSmallProps = {
    onPress(): void;
};

const ButtonSmall: React.FC<ButtonSmallProps> = ({ onPress }) => {
    return (
        <Container onPress={onPress} activeOpacity={0.95}>
            <TextButton variant="H2">Avançar</TextButton>
        </Container>
    );
};

export { ButtonSmall };
