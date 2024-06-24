import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Alert } from "react-native";
import LogoSvg from "app/modules/home/assets/svgs/app-icon.svg";
import { InputCustom } from "app/shared/components/input/input.component";
import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import {
    ButtonStyle,
    Container,
    ImageView,
    InputContainer,
    RecoveryContainer,
} from "./login.styles";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";

const Login: React.FC = () => {
    const { dispatch } = useNavigation();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [focusUser, setFocusUser] = useState<boolean>(false);
    const [focusPassword, setFocusPassword] = useState<boolean>(false);

    const disabled = !username || !password;

    const handleCleanName = () => {
        setUsername("");
        setUsernameError("");
    };

    const handleCleanPassword = () => {
        setPassword("");
        setPasswordError("");
    };

    const validateUsername = (username: string) => {
        if (username.length < 4) {
            setUsernameError("Usuário deve ter pelo menos 4 caracteres.");
            return false;
        }
        setUsernameError("");
        return true;
    };

    const validatePassword = (password: string) => {
        const uppercaseRegex = /[A-Z]/;
        if (!uppercaseRegex.test(password)) {
            setPasswordError(
                "Senha deve conter pelo menos uma letra maiúscula.",
            );
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleLogin = () => {
        if (!validateUsername(username) || !validatePassword(password)) {
            return;
        }

        if (!password) {
            setPasswordError("Digite a senha.");
            return;
        }

        if (username && password) {
            dispatch(StackActions.replace("Home"));
        }
    };

    const handleFocusUser = (isFocused: boolean) => {
        setFocusUser(isFocused);
    };

    const handleFocusPassword = (isFocused: boolean) => {
        setFocusPassword(isFocused);
    };

    const renderErrorText = (error: string) => {
        return (
            <TextDefault variant="P1" style={{ color: "red" }}>
                {error}
            </TextDefault>
        );
    };

    return (
        <Container>
            <StatusBar style="light" />
            <ImageView>
                <LogoSvg width={224} height={224} />
            </ImageView>
            <InputContainer>
                {usernameError && renderErrorText(usernameError)}
                <InputCustom
                    placeholder={focusUser ? " " : "Usuário"}
                    label={focusUser ? "Usuário" : undefined}
                    onFocus={() => handleFocusUser(true)}
                    onEndEditing={() => handleFocusUser(false)}
                    variant="PRIMARY"
                    onChangeText={(text) => {
                        setUsername(text);
                        setUsernameError("");
                    }}
                    onPress={handleCleanName}
                    value={username}
                    error={!!usernameError}
                    leftIcon
                    leftIconName="person-outline"
                    rightIcon={!!username}
                    rightIconName="close-circle"
                    colorIcon={COLOR_LIGHT.BASE[100]}
                    textColor={COLOR_LIGHT.BASE[100]}
                    selectionColor={COLOR_LIGHT.BASE[100]}
                    placeholderTextColor={COLOR_LIGHT.BASE[100]}
                    activeOutlineColor={COLOR_LIGHT.BASE[100]}
                    underlineColor={COLOR_LIGHT.BASE[100]}
                    activeUnderlineColor={
                        disabled
                            ? COLOR_LIGHT.BASE[100]
                            : COLOR_LIGHT.BUTTON[100]
                    }
                    style={{
                        fontSize: 18,
                        backgroundColor: COLOR_LIGHT.BASE[400],
                    }}
                />

                {passwordError && renderErrorText(passwordError)}
                <InputCustom
                    placeholder={focusPassword ? " " : "Senha"}
                    label={focusPassword ? "Senha" : undefined}
                    onFocus={() => handleFocusPassword(true)}
                    onEndEditing={() => handleFocusPassword(false)}
                    variant="PRIMARY"
                    onChangeText={(text) => {
                        setPassword(text);
                        setPasswordError("");
                    }}
                    onPress={handleCleanPassword}
                    value={password}
                    error={!!passwordError}
                    secureTextEntry
                    leftIcon
                    leftIconName="lock-closed"
                    rightIcon={!!password}
                    rightIconName="close-circle"
                    textColor={COLOR_LIGHT.BASE[100]}
                    colorIcon={COLOR_LIGHT.BASE[100]}
                    selectionColor={COLOR_LIGHT.BASE[100]}
                    placeholderTextColor={COLOR_LIGHT.BASE[100]}
                    activeUnderlineColor={
                        disabled
                            ? COLOR_LIGHT.BASE[100]
                            : COLOR_LIGHT.BUTTON[100]
                    }
                    style={{ fontSize: 18, color: COLOR_LIGHT.BASE[100] }}
                />

                <TouchableOpacity disabled={disabled} onPress={handleLogin}>
                    <ButtonStyle disabled={disabled} mode="contained">
                        <TextDefault variant="H2">Entrar</TextDefault>
                    </ButtonStyle>
                </TouchableOpacity>

                <RecoveryContainer
                    onPress={() => {
                        Alert.alert("Esqueci a senha", "Teste brq movies");
                    }}
                >
                    <TextDefault variant="P1">Esqueci a senha</TextDefault>
                </RecoveryContainer>
            </InputContainer>
        </Container>
    );
};

export { Login };
