import styled from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.METRICS.MARGIN.x12 * 2}px;
`;

export const ContainerButton = styled.View`
    position: absolute;
    z-index: 999;
    right: ${({ theme }) => theme.METRICS.PADDING.x24}px;
`;
