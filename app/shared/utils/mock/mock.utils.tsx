import { CustomCardProps } from "app/modules/home/components/cards/custom-card.component";

const mockCardsInfo: CustomCardProps[] = [
    {
        icon: "heart-outline",
        label1: "LABEL",
        label2: "Text",
        onPress: () => console.log("Perfil pressionado"),
    },
    {
        icon: "star-outline",
        label1: "LABEL",
        label2: "Text",
        onPress: () => console.log("Configurações pressionadas"),
    },
    {
        icon: "calendar-month-outline",
        label1: "LABEL",
        label2: "Text",
        onPress: () => console.log("Configurações pressionadas"),
    },
    {
        icon: "bell-outline",
        label1: "LABEL",
        label2: "Text",
        onPress: () => console.log("Configurações pressionadas"),
    },
];

export { mockCardsInfo };
