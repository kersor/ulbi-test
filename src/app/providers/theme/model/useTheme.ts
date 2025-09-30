import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const LOCAL_STORAGE_KEY_THEME = "theme"

export enum BackType {
  DARK = "dark",
  LIGHT = "light"
}

type ThemeType = {
    theme: BackType
    setTheme: () => void
}

export const useTheme = create<ThemeType>()(
  persist(
    (set, get) => ({
      theme: BackType.LIGHT,
      setTheme: () => set({ theme: get().theme === BackType.DARK ? BackType.LIGHT : BackType.DARK }),
    }),
    { name: LOCAL_STORAGE_KEY_THEME },
  ),
)