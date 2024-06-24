import React, { useEffect } from "react";
import { Container } from "./home.styles";
import { StatusBar } from "expo-status-bar";
import { AppHeader } from "app/shared/components/headers/app-header/app-header.component";
import TabViewComponent from "../../components/tab-view.component/tab-view.component";
import { useMovieStore } from "../../store/useMoviesStore";

const Home: React.FC = () => {
    const { fetchMovies } = useMovieStore();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <Container>
            <StatusBar style="light" />
            <AppHeader title="BRQ Movies" />
            <TabViewComponent />
        </Container>
    );
};

export { Home };
