import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { BgDefaultProps } from "./bg-default.component";

export const Container = styled(SafeAreaView)<BgDefaultProps>`
    flex: 1;
    padding-bottom: ${({ theme }) => theme.METRICS?.PADDING.x24}px;
    background-color: ${({ theme }) => theme.COLORS?.BRAND[100]};
`;
