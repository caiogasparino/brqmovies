import { TextProps } from "react-native";
import { useTheme } from "styled-components/native";

import { METRICS_TYPE } from "app/shared/design/metrics/metrics";

import { Text, TEXT_VARIANT } from "./text-default.styles";

type TextDefaultProps = TextProps & {
    size?: keyof METRICS_TYPE["FONT_SIZE"];
    variant?: TEXT_VARIANT;
    testID?: string;
};

const TextDefault: React.FC<TextDefaultProps> = ({
    size,
    variant = "P1",
    testID,
    ...rest
}) => {
    const { METRICS } = useTheme();

    const fontSizeStyle = size ? { fontSize: METRICS.FONT_SIZE[size] } : {};

    return (
        <Text
            testID={testID}
            variant={variant}
            style={{ ...fontSizeStyle }}
            {...rest}
        />
    );
};

export { TextDefault };
