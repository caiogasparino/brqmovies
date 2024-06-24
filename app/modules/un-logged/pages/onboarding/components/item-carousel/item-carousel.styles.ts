import styled from "styled-components/native";

export const Container = styled.View`
    width: ${({ theme }) => theme.METRICS.GLOBAL.width}px;
    justify-content: center;
    padding: 0px ${({ theme }) => theme.METRICS.PADDING.x24}px;
    margin-bottom: 10%;
`;
