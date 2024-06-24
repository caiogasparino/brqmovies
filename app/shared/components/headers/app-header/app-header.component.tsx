import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "app/shared/libs/font-size/font-size";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dialog, IconButton, Portal, Text } from "react-native-paper";
import { Container, TitleHeader, CustomIcon } from "./app-header.styles";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";
import { StackActions, useNavigation } from "@react-navigation/native";

type AppHeaderProps = {
    title?: string;
};

const dialogStyles = {
    backgroundColor: COLOR_LIGHT.BRAND[100],
};

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
    const { top } = useSafeAreaInsets();
    const height = RFValue(80) + top;
    const { dispatch } = useNavigation();

    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => {
        dispatch(StackActions.replace("Login"));
    };

    return (
        <Container intensity={0} style={{ height }}>
            <TitleHeader variant="H2">{title}</TitleHeader>
            <TouchableOpacity
                onPress={showDialog}
                style={{ marginLeft: "auto" }}
            >
                <CustomIcon name="dots-three-vertical" />
            </TouchableOpacity>
            <Portal>
                <Dialog
                    visible={isDialogVisible}
                    onDismiss={() => setDialogVisible(false)}
                    style={dialogStyles}
                >
                    <Dialog.Title
                        style={{
                            color: COLOR_LIGHT.BASE[100],
                            fontFamily: "Inter_700Bold",
                        }}
                    >
                        Sair
                    </Dialog.Title>
                    <Dialog.Content>
                        <Text
                            style={{
                                color: COLOR_LIGHT.BASE[100],
                                fontFamily: "Inter_700Bold",
                            }}
                        >
                            Tem certeza que deseja sair?
                        </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <IconButton
                            icon="logout"
                            style={{ backgroundColor: COLOR_LIGHT.BASE[100] }}
                            onPress={hideDialog}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Container>
    );
};

export { AppHeader };
