import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { RFValue } from "app/shared/libs/font-size/font-size";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: ${RFValue(110)}px;
    height: ${RFValue(52)}px;
    border-radius: ${RFValue(4)}px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BASE[300]};
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
`;

export const TextButton = styled(TextDefault)`
    color: ${({ theme }) => theme.COLORS.BASE[300]};
`;
