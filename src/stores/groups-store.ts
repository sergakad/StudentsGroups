import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IModalState } from "@/interface/group.interface";
import { IGroups } from "@/interface/group.interface";

export const useGroupsStore = create(
  devtools<IGroups>((set) => ({
    groups: [],
    isLoading: true,
    setGroups: (val) => {
      set({ groups: val });
    },
    setLoading: (val) => {
      set({ isLoading: val });
    },
  }))
);

export const useModalStateStore = create<IModalState>((set) => ({
  isModalState: false,
  setModalOpen: () => {
    set({ isModalState: true });
  },
  setModalClose: () => {
    set({ isModalState: false });
  },
}));
