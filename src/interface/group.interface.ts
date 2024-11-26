export interface IGroup {
  id: number;
  title: string;
}

export interface IGroups {
  groups: IGroup[];
  setGroups: (val: IGroup[]) => void;
  isLoading: boolean;
  setLoading: (val: boolean) => void;
}

export interface IModalState {
  isModalState: boolean;
  setModalOpen: () => void;
  setModalClose: () => void;
}
