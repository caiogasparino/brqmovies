import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, IconButton, TouchableRipple } from "react-native-paper";

export interface CustomCardProps {
    id?: number;
    icon: string;
    label1: string;
    label2: string;
    onPress?: () => void;
}
const CustomCard = ({ icon, label1, label2, onPress }: CustomCardProps) => (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <View style={styles.row}>
                    <IconButton
                        icon={icon}
                        iconColor={COLOR_LIGHT.BUTTON[100]}
                        containerColor={COLOR_LIGHT.BRAND[100]}
                        size={20}
                    />
                    <TextDefault style={styles.label1}>{label1}</TextDefault>
                </View>
                <TextDefault style={styles.label2}>{label2}</TextDefault>
            </View>
        </Card>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        overflow: "hidden",
    },
    card: {
        width: "100%",
        padding: 5,
        elevation: 4,
        backgroundColor: COLOR_LIGHT.BASE[400],
    },
    cardContent: {
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    label1: {
        fontSize: 14,
        marginLeft: 10,
        color: COLOR_LIGHT.BUTTON[100],
    },
    label2: {
        fontSize: 20,
        marginLeft: 10,
        color: COLOR_LIGHT.BUTTON[100],
    },
});

export { CustomCard };
