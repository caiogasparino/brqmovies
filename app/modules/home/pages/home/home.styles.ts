import styled from "styled-components/native";

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
