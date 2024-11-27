import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IModalState } from "@/shared/interfaces/student.interface";
import { IStudents } from "@/shared/interfaces/student.interface";

export const useStudentsStore = create(
  devtools<IStudents>((set) => ({
    students: [],
    setStudents: (val) => {
      set({ students: val });
    },
    isLoading: true,
    setLoading: (val) => {
      set({ isLoading: val });
    },
    currentGroupID: 0,
    setCurrentGroupID: (val) => {
      set({ currentGroupID: val });
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
