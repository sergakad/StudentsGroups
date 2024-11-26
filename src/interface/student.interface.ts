export interface IStudent {
  id: number;
  name: string;
  groupId: number;
  photo: string;
}

export interface IStudents {
  students: IStudent[];
  setStudents: (val: IStudent[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}

export interface IModalState {
  isModalState: boolean;
  setModalOpen: () => void;
  setModalClose: () => void;
}
