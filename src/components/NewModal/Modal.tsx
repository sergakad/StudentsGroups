import { FC, ReactNode, useState } from "react";
import s from "./Modal.module.scss";

interface IModalProps {
  content: ReactNode;
  trigger: ReactNode;
  visible: boolean;
  onClick: ()=> void
}

const Modal: FC<IModalProps> = ({ content, trigger, visible = false, onClick }) => {
  const [isModalVisible, setModalVisible] = useState<boolean>(visible);

  
  return (
    <>
      <div onClick={onClick}>{trigger}</div>
      {isModalVisible && (
        <div className={s.overlay} onClick={() => setModalVisible(false)}>
          <div className={s.content}>{content}</div>
        </div>
      )}
    </>
  );
};

export { Modal };
