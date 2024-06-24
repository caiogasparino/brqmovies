import React from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "./input.styles";

interface InputProps extends React.ComponentProps<typeof Input> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconName?: keyof typeof Ionicons.glyphMap;
    rightIconName?: keyof typeof Ionicons.glyphMap;
    colorIcon?: string;
    secureTextEntry?: boolean;
    value?: string;
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
    ...props
}) => {
    const renderLeftIcon = () => {
        if (leftIcon) {
            return (
                <TextInput.Icon
                    icon={() => (
                        <Ionicons
                            name={leftIconName}
                            size={24}
                            color={colorIcon}
                        />
                    )}
                />
            );
        }
        return null;
    };

    const renderRightIcon = () => {
        if (rightIcon) {
            return (
                <TextInput.Icon
                    onPress={onPress}
                    icon={() => (
                        <Ionicons
                            name={rightIconName}
                            size={24}
                            color={colorIcon}
                        />
                    )}
                />
            );
        }
        return null;
    };

    return (
        <Input
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
