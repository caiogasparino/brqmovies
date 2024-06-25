import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native-paper";
import { Input } from "./input.styles";

interface InputProps extends React.ComponentProps<typeof Input> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
    rightIconName?: keyof typeof MaterialCommunityIcons.glyphMap;
    colorIcon?: string;
    secureTextEntry?: boolean;
    value?: string;
    testID?: string;
    onPress?: () => void;
}

const InputCustom: React.FC<InputProps> = ({
    placeholder,
    leftIcon,
    rightIcon,
    leftIconName,
    rightIconName,
    secureTextEntry,
    colorIcon,
    value,
    onPress,
    onChangeText,
    testID,
    ...props
}) => {
    const renderLeftIcon = () => {
        if (leftIcon) {
            return (
                <TextInput.Icon
                    testID={`${testID}-left-icon`}
                    icon={
                        leftIconName as keyof typeof MaterialCommunityIcons.glyphMap
                    }
                    color={colorIcon}
                />
            );
        }
        return null;
    };

    const renderRightIcon = () => {
        if (rightIcon) {
            return (
                <TextInput.Icon
                    testID={`${testID}-right-icon`}
                    icon={
                        rightIconName as keyof typeof MaterialCommunityIcons.glyphMap
                    }
                    color={colorIcon}
                    onPress={onPress}
                />
            );
        }
        return null;
    };

    return (
        <Input
            testID={testID}
            placeholder={placeholder}
            left={renderLeftIcon()}
            right={renderRightIcon()}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            {...props}
        />
    );
};

export { InputCustom };
