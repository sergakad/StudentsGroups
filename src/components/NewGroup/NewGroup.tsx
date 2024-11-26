import { FC } from "react";
import { GetGroup, PostGroup } from "@/api/GroupHttp";
import { useGroupsStore } from "@/stores/groups-store";
import { useModalStateStore } from "@/stores/groups-store";
import s from "./NewGroup.module.scss";
import { useState, FormEvent } from "react";

const NewGroup: FC = () => {
  const [newName, setNewName] = useState<string>("");
  const setModalClose = useModalStateStore((state) => state.setModalClose);
  const setGroups = useGroupsStore((state) => state.setGroups);
  const setLoading = useGroupsStore((state) => state.setLoading);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalClose();
    setLoading(true);
    console.log(newName);
    (async () => {
      const result = await PostGroup(newName);
      if (typeof result === "string") {
        console.error(result);
      } else {
        (async () => {
          const newData = await GetGroup();
          if (Array.isArray(newData)) {
            console.log(newData);
            setLoading(false);
            setGroups(newData);
          }
        })();
      }
    })();
  };
  return (
    <form className={s.newGroup} onSubmit={submit}>
      <h3 className={s.title}>Название группы</h3>
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

export { NewGroup };
