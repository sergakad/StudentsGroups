import { FC } from "react";
import { Group } from "@/components/Group";
import { useGroupsStore } from "@/stores/groups-store";
import { Modal } from "@/components/Modal";
import { NewGroup } from "@/components/NewGroup";
import s from "./Group.module.scss";

const Groups: FC = () => {
  const groups = useGroupsStore((state) => state.groups);

  return (
    <div className={s.groups}>
      {groups.map((group) => {
        return <Group key={group.id} id={group.id} title={group.title} />;
      })}

      <Modal
        trigger={
          <div className={s.addGroup}>
            <h3 className={s.title}>+</h3>
          </div>
        }
      >
        <NewGroup />
      </Modal>
    </div>
  );
};

export { Groups };
