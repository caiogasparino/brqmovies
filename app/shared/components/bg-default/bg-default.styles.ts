import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding-bottom: ${({ theme }) => theme.METRICS.PADDING.x24}px;
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
`;
