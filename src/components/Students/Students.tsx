import { FC, useState } from "react";
import { Student } from "@/components/Student";
import { useStudentsStore } from "@/stores/students-store";
import { Modal } from "@/components/Modal";
import { NewStudent } from "@/components/NewStudent";
import s from "./Students.module.scss";

const Students: FC = () => {
  const students = useStudentsStore((state) => state.students);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
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
        isActive={isModalVisible}
        onActiveChange={setModalVisible}
        trigger={
          <div className={s.addStudent}>
            <h3 className={s.title}>+</h3>
          </div>
        }
        content={<NewStudent />}
      />
    </div>
  );
};

export { Students };
