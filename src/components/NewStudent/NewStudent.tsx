import { FC } from "react";
import { GetStudent, PostStudent } from "@/api/StudentHttp";
import { useStudentsStore } from "@/stores/students-store";
import { useModalStateStore } from "@/stores/students-store";
import s from "./NewStudent.module.scss";
import { useState, FormEvent } from "react";

const NewStudent: FC = () => {
  const [newName, setNewName] = useState<string>("");
  const setModalClose = useModalStateStore((state) => state.setModalClose);
  const setStudents = useStudentsStore((state) => state.setStudents);
  const setLoading = useStudentsStore((state) => state.setLoading);
  const currentGroupID = useStudentsStore((state) => state.currentGroupID);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalClose();
    setLoading(true);
    console.log(newName);
    (async () => {
      const result = await PostStudent(
        newName,
        "https://ds32-lipeck-r42.gosweb.gosuslugi.ru/netcat_files/21/10/kj8DXcMNKxKdXLWAA8ZX5gRzo953pjvh_49.jpg",
        currentGroupID
      );
      if (typeof result === "string") {
        console.error(result);
      } else {
        (async () => {
          const newData = await GetStudent(currentGroupID);
          if (Array.isArray(newData)) {
            console.log(newData);
            setLoading(false);
            setStudents(newData);
          }
        })();
      }
    })();
  };
  return (
    <form className={s.newStudent} onSubmit={submit}>
      <h3 className={s.title}>Ф.И.О студента</h3>
      <input
        className={s.input}
        value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <button className={s.button} type="submit">
        Добавить
      </button>
    </form>
  );
};

export { NewStudent };
