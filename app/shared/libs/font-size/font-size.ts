import { Dimensions } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

const { height } = Dimensions.get("screen");

export function RFValue(value: number): number {
    return RF(value, height);
}
