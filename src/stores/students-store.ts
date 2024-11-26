import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IModalState } from "@/interface/student.interface";
import { IStudents } from "@/interface/student.interface";

export const useStudentsStore = create(
  devtools<IStudents>((set) => ({
    students: [],
    setStudents: (val) => {
      set({ students: val });
    },
    isLoading:true,
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
