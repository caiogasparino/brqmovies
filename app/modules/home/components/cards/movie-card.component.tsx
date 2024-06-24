import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

const MovieCard = ({
    movie,
    onPress,
}: {
    movie: Movie;
    onPress: () => void;
}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 8,
    },
    title: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
});

export { MovieCard };
