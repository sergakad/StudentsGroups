import { FC } from "react";
import { DeleteIcon } from "@/components/SvgIcons/DeleteIcon";
import { DeleteStudent, GetStudent } from "@/api/StudentHttp";
import { useStudentsStore } from "@/stores/students-store";
import { IStudent } from "@/shared/interfaces/student.interface";
import s from "./Student.module.scss";

const Student: FC<IStudent> = ({ name, id /*photo*/ }) => {
  const setStudents = useStudentsStore((state) => state.setStudents);
  const currentGroupID = useStudentsStore((state) => state.currentGroupID);
  const handleClick = async () => {
    const result = await DeleteStudent(id as number);
    if (typeof result === "string") {
      console.error(result);
    } else {
      (async () => {
        const data = await GetStudent(currentGroupID);
        if (Array.isArray(data)) {
          setStudents(data);
        }
      })();
      console.log("Студент исключен:", result);
    }
  };
  return (
    <div className={s.student}>
      <div className={s.deleteStudent} onClick={handleClick}>
        <DeleteIcon />
      </div>
      <div className={s.wrapper}>
        {/* <img className={s.logo} src = {photo} alt ='Лицо студента' /> */}
        <div className={s.logo} />
        <h3 className={s.title}>{name}</h3>
      </div>
    </div>
  );
};

export { Student };
