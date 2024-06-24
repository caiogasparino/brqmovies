import styled, { css } from "styled-components/native";
import { TextInput } from "react-native-paper";

export type INPUT_VARIANT = "PRIMARY" | "SECONDARY" | "TERTIARY";

type InputProps = {
    variant: INPUT_VARIANT;
};

export const Input = styled(TextInput)<InputProps>`
    border-radius: 4px;
    margin-bottom: 50px;
    ${({ variant }) =>
        variant === "PRIMARY" &&
        css`
            background-color: ${({ theme }) => theme.COLORS.BASE[400]};
            color: ${({ theme }) => theme.COLORS.BASE[100]};
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[400]};
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
            border-bottom: 2px solid ${({ theme }) => theme.COLORS.BASE[100]};
        `}

    ${({ variant }) =>
        variant === "SECONDARY" &&
        css`
            background-color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
            color: ${({ theme }) => theme.COLORS.BASE[100]};
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[400]};
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
            border: 1px solid ${({ theme }) => theme.COLORS.DARK[100]};
        `}

    ${({ variant }) =>
        variant === "TERTIARY" &&
        css`
            background-color: ${({ theme }) => theme.COLORS.DARK[100]};
            color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[400]};
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
            border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[200]};
        `}
`;
