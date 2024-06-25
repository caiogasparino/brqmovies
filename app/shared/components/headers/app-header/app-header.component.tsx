import { StackActions, useNavigation } from "@react-navigation/native";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";
import { RFValue } from "app/shared/libs/font-size/font-size";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dialog, IconButton, Portal, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, CustomIcon, TitleHeader } from "./app-header.styles";

type AppHeaderProps = {
    title?: string;
    testID?: string;
};

const AppHeader: React.FC<AppHeaderProps> = ({ title, testID }) => {
    const { top } = useSafeAreaInsets();
    const height = RFValue(80) + top;
    const { dispatch } = useNavigation();

    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => {
        setDialogVisible(false);
        dispatch(StackActions.replace("Login"));
    };

    return (
        <Container intensity={0} style={{ height }} testID={testID}>
            <TitleHeader variant="H2" testID={`${testID}-title`}>
                {title}
            </TitleHeader>
            <TouchableOpacity onPress={showDialog} style={{ marginLeft: "auto" }} testID={`${testID}-button`}>
                <CustomIcon name="dots-three-vertical" />
            </TouchableOpacity>
            <Portal>
                <Dialog
                    visible={isDialogVisible}
                    onDismiss={() => setDialogVisible(false)}
                    style={{ backgroundColor: COLOR_LIGHT.BRAND[100] }}
                    testID={`${testID}-dialog`}
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
                            testID={`${testID}-logout-button`}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Container>
    );
};

export { AppHeader };
