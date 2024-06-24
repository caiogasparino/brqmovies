import * as React from "react";
import {
    FlatList,
    PressableAndroidRippleConfig,
    StyleProp,
    TextStyle,
    View,
    ViewStyle,
    StyleSheet,
    useWindowDimensions,
} from "react-native";
import {
    TabView,
    SceneMap,
    TabBar,
    NavigationState,
    Route,
    SceneRendererProps,
    TabBarIndicatorProps,
    TabBarItemProps,
} from "react-native-tab-view";
import { Container } from "./tab-view.styles";
import { Scene, Event } from "react-native-tab-view/lib/typescript/src/types";
import { JSX } from "react/jsx-runtime";
import { COLOR_LIGHT } from "app/shared/design/colors/colorLight.colors";
import { ActivityIndicator } from "react-native-paper";
import { TextDefault } from "app/shared/components/texts/text-default/text-default.component";
import { MovieCard, Movie } from "../cards/movie-card.component";
import { useMovieStore } from "../../store/useMoviesStore";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useFavoriteStore } from "../../store/useFavorite";

export default function TabViewComponent() {
    const layout = useWindowDimensions();
    const { dispatch } = useNavigation();
    const { movies, loading, error } = useMovieStore();
    const { favorites } = useFavoriteStore();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Todos os Filmes" },
        { key: "second", title: "Filmes Favoritos" },
    ]);

    const renderItem = ({ item }: { item: Movie }) => (
        <MovieCard
            movie={item}
            onPress={() =>
                dispatch(StackActions.push("MovieDetails", { movie: item }))
            }
        />
    );

    const FirstRoute = () => (
        <React.Fragment>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={COLOR_LIGHT.BRAND[100]}
                />
            ) : error ? (
                <TextDefault>Erro ao carregar os filmes</TextDefault>
            ) : (
                <View style={styles.container}>
                    <FlatList
                        style={{
                            backgroundColor: COLOR_LIGHT.BRAND[100],
                        }}
                        data={movies}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                </View>
            )}
        </React.Fragment>
    );

    const SecondRoute = () => (
        <React.Fragment>
            <View style={styles.container}>
                <FlatList
                    style={{
                        backgroundColor: COLOR_LIGHT.BRAND[100],
                    }}
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </React.Fragment>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = (
        props: JSX.IntrinsicAttributes &
            SceneRendererProps & {
                navigationState: NavigationState<Route>;
                scrollEnabled?: boolean | undefined;
                bounces?: boolean | undefined;
                activeColor?: string | undefined;
                inactiveColor?: string | undefined;
                pressColor?: string | undefined;
                pressOpacity?: number | undefined;
                getLabelText?:
                    | ((scene: Scene<Route>) => string | undefined)
                    | undefined;
                getAccessible?:
                    | ((scene: Scene<Route>) => boolean | undefined)
                    | undefined;
                getAccessibilityLabel?:
                    | ((scene: Scene<Route>) => string | undefined)
                    | undefined;
                getTestID?:
                    | ((scene: Scene<Route>) => string | undefined)
                    | undefined;
                renderLabel?:
                    | ((
                          scene: Scene<Route> & {
                              focused: boolean;
                              color: string;
                          },
                      ) => React.ReactNode)
                    | undefined;
                renderIcon?:
                    | ((
                          scene: Scene<Route> & {
                              focused: boolean;
                              color: string;
                          },
                      ) => React.ReactNode)
                    | undefined;
                renderBadge?:
                    | ((scene: Scene<Route>) => React.ReactNode)
                    | undefined;
                renderIndicator?:
                    | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
                    | undefined;
                renderTabBarItem?:
                    | ((
                          props: TabBarItemProps<Route> & { key: string },
                      ) => React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                      >)
                    | undefined;
                onTabPress?:
                    | ((scene: Scene<Route> & Event) => void)
                    | undefined;
                onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
                tabStyle?: StyleProp<ViewStyle>;
                indicatorStyle?: StyleProp<ViewStyle>;
                indicatorContainerStyle?: StyleProp<ViewStyle>;
                labelStyle?: StyleProp<TextStyle>;
                contentContainerStyle?: StyleProp<ViewStyle>;
                style?: StyleProp<ViewStyle>;
                gap?: number | undefined;
                testID?: string | undefined;
                android_ripple?: PressableAndroidRippleConfig | undefined;
            },
    ) => (
        <TabBar
            {...props}
            labelStyle={{
                fontSize: 16,
                fontWeight: "700",
            }}
            indicatorStyle={{ backgroundColor: COLOR_LIGHT.BUTTON[100] }}
            style={{ backgroundColor: COLOR_LIGHT.BRAND[100] }}
            activeColor={COLOR_LIGHT.BUTTON[100]}
            inactiveColor="lightgray"
        />
    );

    return (
        <Container>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                style={{ marginTop: 100 }}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
});
