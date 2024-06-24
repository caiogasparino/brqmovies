import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
`;

export const Contain = styled.View`
    padding: 20px;
`;

export const Space = styled.View`
    margin-bottom: 20px;
`;
