import { create } from "zustand";

interface mapModeStore {
    mode: string;
    setMode: (mode: string) => void;
}



export const useMapModeStore = create<mapModeStore>((set) => ({
  mode: "normal",
  setMode: (mode: string) => set(() => ({ mode })),
}));
