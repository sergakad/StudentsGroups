import * as Dialog from "@radix-ui/react-dialog";
import { FC, ReactNode } from "react";
import { useModalStateStore } from "@/stores/groups-store";
import s from "./Modal.module.scss";

export interface IModalProps {
  trigger: ReactNode;
  title?: string;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: () => void;
}

const Modal: FC<IModalProps> = ({ trigger, children, title }) => {
    const isModalState = useModalStateStore((state) => state.isModalState);
    const setModalOpen = useModalStateStore((state) => state.setModalOpen);
    const setModalClose = useModalStateStore((state) => state.setModalClose);
  return (
    <Dialog.Root open={isModalState} onOpenChange={setModalOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} onClick={setModalClose} />
        <Dialog.Content className={s.content} >
          <Dialog.Title>{title}</Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { Modal };
