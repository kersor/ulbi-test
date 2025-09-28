import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const LOCAL_STORAGE_KEY_THEME = "theme"

export type BackType = "dark" | "light"

type ThemeType = {
    theme: BackType
    setTheme: () => void
}

export const useTheme = create<ThemeType>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: () => set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    { name: LOCAL_STORAGE_KEY_THEME },
  ),
)