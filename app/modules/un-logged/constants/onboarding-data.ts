import Onboarding1Svg from "app/modules/un-logged/assets/onboarding/onboarding1.svg";
import Onboarding2Svg from "app/modules/un-logged/assets/onboarding/onboarding2.svg";
import Onboarding3Svg from "app/modules/un-logged/assets/onboarding/onboarding3.svg";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type TypeItemOnboarding = {
    icon: FC<SvgProps>;
    title: string;
    subTitle: string;
};

export const ONBOARDING_DATA = [
    {
        id: "1-index",
        icon: Onboarding1Svg,
        title: `Bem-vindo ao\nBRQ Movies`,
        subTitle: "Sua nova plataforma de entretenimento.",
    },
    {
        id: "2-index",
        icon: Onboarding2Svg,
        title: `Descubra e Explore\nNovidades`,
        subTitle:
            "Navegue por um vasto catálogo de títulos, tudo em um único lugar.",
    },
    {
        id: "3-index",
        icon: Onboarding3Svg,
        title: `Acompanhe as Tendências\ndo Mundo do Cinema e TV`,
        subTitle:
            "Fique por dentro dos lançamentos e atualizações em tempo real.",
    },
];
