import {create} from "zustand";

type DarkModeState = {
    darkMode: boolean;
    toggleDark: () => void;
};

export const useDarkMode = create<DarkModeState>((set) => ({
    darkMode: false,
    toggleDark: () => set((state) => ({darkMode: !state.darkMode})),
}))