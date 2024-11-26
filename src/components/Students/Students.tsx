import { FC } from "react";
import { Student } from "@/components/Student";
import { useStudentsStore } from "@/stores/students-store";
import { Modal } from "@/components/Modal";
import { NewStudent } from "@/components/NewStudent";
import s from "./Students.module.scss";

const Students: FC = () => {
  const students = useStudentsStore((state) => state.students);

  return (
    <div className={s.students}>
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            groupId={student.groupId}
            photo={student.photo}
          />
        );
      })}

      <Modal
        trigger={
          <div className={s.addStudent}>
            <h3 className={s.title}>+</h3>
          </div>
        }
      >
        <NewStudent />
      </Modal>
    </div>
  );
};

export { Students };
