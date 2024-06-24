import { axiosClient } from "app/shared/clients/axios/axios-client";
import { create } from "zustand";

interface MovieStoreState {
    movies: any[];
    loading: boolean;
    error: string | null;
    fetchMovies: () => void;
}

const apiKey = process.env.REACT_APP_API_KEY;

export const useMovieStore = create<MovieStoreState>((set) => ({
    movies: [],
    loading: false,
    error: null,
    fetchMovies: async () => {
        set({ loading: true, error: null });
        try {
            const data = await axiosClient({
                method: "get",
                url: "/movie/popular?language=en-US&page=1",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            set({ movies: data.results, loading: false });
        } catch (error: Error | any) {
            set({ error: error.message, loading: false });
        }
    },
}));
