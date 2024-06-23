import { create } from 'zustand';

interface IProjectCard {
  projectId: Nullable<number>;
  setProjectId: (id: Nullable<number>) => void;
}

export const useProjectStore = create<IProjectCard>()(set => ({
  projectId: null,
  setProjectId: (id: Nullable<number>) => set(() => ({ projectId: id })),
}));
