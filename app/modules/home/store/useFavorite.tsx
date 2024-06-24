import { create } from "zustand";
import { Movie } from "../components/cards/movie-card.component";

interface FavoriteStore {
    favorites: Movie[];
    addFavorite: (favorite: Movie) => void;
    removeFavorite: (id: number) => void;
    clearFavorites: () => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],
    addFavorite: (favorite: Movie) =>
        set((state: { favorites: Movie[] }) => ({
            favorites: [...state.favorites, favorite],
        })),
    removeFavorite: (id: number) =>
        set((state: { favorites: Movie[] }) => ({
            favorites: state.favorites.filter((favorite) => favorite.id !== id),
        })),
    clearFavorites: () => set({ favorites: [] }),
}));

export { useFavoriteStore };
