import { FC, ReactNode } from "react";
import s from "./Modal.module.scss";

interface IModalProps {
  isActive: boolean;
  onActiveChange: (val: boolean) => void;
  content: ReactNode;
  trigger: ReactNode;
}

const Modal: FC<IModalProps> = ({
  isActive = false,
  onActiveChange,
  content,
  trigger,
}) => {
  return (
    <>
      <div onClick={() => onActiveChange(true)}>{trigger}</div>
      {isActive && (
        <div>
          <div className={s.overlay} onClick={() => onActiveChange(false)}>
            <div
              className={s.content}
              onClick={(event) => event.stopPropagation()}
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
