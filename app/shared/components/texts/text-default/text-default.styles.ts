import styled, { css } from "styled-components/native";

export type TEXT_VARIANT = "H1" | "H2" | "H3" | "P1" | "P2";

type TextProps = {
    variant: TEXT_VARIANT;
};

export const Text = styled.Text<TextProps>`
    ${({ variant }) =>
        variant === "H1" &&
        css`
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x32}px;
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[700]};
            color: ${({ theme }) => theme.COLORS.BRAND[100]};
        `}

    ${({ variant }) =>
        variant === "H2" &&
        css`
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.X16}px;
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[600]};
            color: ${({ theme }) => theme.COLORS.DARK[100]};
        `}    
        
    ${({ variant }) =>
        variant === "H3" &&
        css`
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.X16}px;
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[600]};
            color: ${({ theme }) => theme.COLORS.DARK[100]};
        `}

  ${({ variant }) =>
        variant === "P1" &&
        css`
            font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x14}px;
            font-family: ${({ theme }) => theme.FONTS.PRIMARY[400]};
            color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
        `}
`;
