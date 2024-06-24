import { Button } from "react-native-paper";
import styled from "styled-components/native";

interface ButtonStyleProps {
    disabled?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
`;

export const ImageView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const InputContainer = styled.View`
    flex: 1;
    padding: 5%;
`;

export const ButtonStyle = styled(Button)<ButtonStyleProps>`
    width: 100%;
    height: 40px;
    background-color: ${({ theme, disabled }) =>
        disabled ? theme.COLORS.NEUTRAL[100] : theme.COLORS.BUTTON[100]};
`;

export const RecoveryContainer = styled.TouchableOpacity`
    margin-top: 10%;
    align-self: center;
`;
