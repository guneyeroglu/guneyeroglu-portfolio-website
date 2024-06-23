import { create } from 'zustand';

interface IMeCard {
  hover: boolean;
  setHover: (state: boolean) => void;
}

export const useMeStore = create<IMeCard>()(set => ({
  hover: false,
  setHover: (state: boolean) => set(() => ({ hover: state })),
}));
