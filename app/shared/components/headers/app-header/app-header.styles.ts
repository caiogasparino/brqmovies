import styled from "styled-components/native";
import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { BlurView } from "expo-blur";

import { Entypo } from "@expo/vector-icons";
import { RFValue } from "app/shared/libs/font-size/font-size";

export const Container = styled(BlurView)`
    padding: 0px ${({ theme }) => theme.METRICS.PADDING.x24}px;
    padding-bottom: ${({ theme }) => theme.METRICS.PADDING.x24 / 2}px;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.COLORS.BRAND[100]};
    flex-direction: row;
    align-items: flex-end;
`;

export const TitleHeader = styled(TextDefault)`
    font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.x20}px;
    color: ${({ theme }) => theme.COLORS.BASE[100]};
`;

export const CustomIcon = styled(Entypo).attrs(({ theme }) => ({
    size: RFValue(22),
    color: theme.COLORS.BASE[100],
}))``;
