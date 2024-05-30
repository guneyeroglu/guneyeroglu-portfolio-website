import { create } from 'zustand';

interface BearState {
  hover: boolean;
  setHover: (state: boolean) => void;
}

export const useMeStore = create<BearState>()(set => ({
  hover: false,
  setHover: (state: boolean) => set(() => ({ hover: state })),
}));
