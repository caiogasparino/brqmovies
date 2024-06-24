import {
    StackActions,
    useNavigation,
    useRoute,
} from "@react-navigation/native";
import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";
import { mockCardsInfo } from "app/shared/utils/mock/mock.utils";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, Image, View } from "react-native";
import { IconButton } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    CustomCard,
    CustomCardProps,
} from "../../components/cards/custom-card.component";
import { Movie as Movies } from "../../components/cards/movie-card.component";
import { useFavoriteStore } from "../../store/useFavorite";
import { Contain, Container, Space } from "./movie.styles";

const Movie: React.FC = () => {
    const { dispatch } = useNavigation();
    const { top } = useSafeAreaInsets();
    const height = RFValue(10) + top;
    const route = useRoute();
    const { movie } = route.params as { movie: Movies };
    const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
    console.log("🚀 ~ favorites:", favorites);
    const [press, setPress] = useState(
        favorites.some((fav) => fav.id === movie.id),
    );

    const renderItem = ({ item }: { item: CustomCardProps }) => (
        <CustomCard
            icon={item.icon}
            label1={item.label1}
            label2={item.label2}
            onPress={item.onPress}
        />
    );

    const handleBack = () => {
        dispatch(StackActions.pop());
    };

    const handleFavorite = () => {
        if (press) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
        setPress(!press);
    };

    const ListHeaderComponent = () => (
        <View>
            <StatusBar style="light" />

            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={{ width: "100%", height: 526 }}
            />
            <IconButton
                style={{
                    position: "absolute",
                    top: height,
                    left: 10,
                    zIndex: 10,
                }}
                containerColor={COLOR_LIGHT.BRAND[100]}
                iconColor="white"
                size={24}
                icon="arrow-left"
                onPress={handleBack}
            />
            <IconButton
                style={{
                    position: "absolute",
                    top: height,
                    right: 10,
                    zIndex: 10,
                }}
                containerColor={
                    press ? COLOR_LIGHT.BUTTON[100] : COLOR_LIGHT.BASE[100]
                }
                iconColor={
                    press ? COLOR_LIGHT.BRAND[100] : COLOR_LIGHT.BRAND[100]
                }
                size={24}
                icon="heart"
                onPress={handleFavorite}
            />
            <Contain>
                <TextDefault
                    variant="H1"
                    style={{
                        color: COLOR_LIGHT.BASE[100],
                    }}
                >
                    {movie.title}
                </TextDefault>
                <Space />
                <TextDefault
                    variant="H2"
                    style={{ color: COLOR_LIGHT.BUTTON[100] }}
                >
                    Sinopse
                </TextDefault>
                <Space />
                <TextDefault
                    variant="H3"
                    style={{ color: COLOR_LIGHT.BASE[100] }}
                >
                    {movie.overview}
                </TextDefault>
                <Space />
            </Contain>
        </View>
    );

    return (
        <Container>
            <FlatList
                data={mockCardsInfo}
                keyExtractor={(item) => item.icon.toString()}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                contentContainerStyle={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
                numColumns={2}
            />
        </Container>
    );
};

export { Movie };
