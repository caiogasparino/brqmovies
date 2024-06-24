import { RFValue } from "app/shared/libs/font-size/font-size";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export const METRICS = {
    GLOBAL: {
        height,
        width,
    },
    FONT_SIZE: {
        x12: RFValue(12),
        x14: RFValue(14),
        x18: RFValue(18),
        x24: RFValue(24),
        X16: RFValue(16),
        x20: RFValue(20),
        x32: RFValue(32),
    },
    ICONS: {
        MD: RFValue(28),
    },
    PADDING: {
        x8: RFValue(8),
        x24: RFValue(24),
    },
    MARGIN: {
        x4: RFValue(4),
        x8: RFValue(8),
        x12: RFValue(12),
    },
};

export type METRICS_TYPE = typeof METRICS;
