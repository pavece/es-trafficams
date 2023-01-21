import { create } from "zustand";
import { ICamera } from "../interfaces/ICamera";

interface IModalStore {
  open: boolean;
  data: ICamera;
  openModal: (data: ICamera) => void;
  closeModal: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  open: false,
  data: {
    identification: "",
    location: { lat: 0, lon: 0, city: "" },
    serialNumber: "",
    imageUrl: "",
  },
  openModal: (data: ICamera) =>
    set((state: IModalStore) => ({
      open: true,
      data,
    })),
  closeModal: () =>
    set(() => ({
      open: false,
    })),
}));
