import { FC } from "react";
import { DeleteIcon } from "@/components/SvgIcons/DeleteIcon";
import { DeleteGroup, GetGroup } from "@/api/GroupHttp";
import { useGroupsStore } from "@/stores/groups-store";
import { IGroup } from "@/shared/interfaces/group.interface";
import s from "./Group.module.scss";
import Link from "next/link";

const Group: FC<IGroup> = ({ id, title }) => {
  const setGroups = useGroupsStore((state) => state.setGroups);
  const handleClick = async () => {
    const result = await DeleteGroup(id);
    if (typeof result === "string") {
      console.error(result);
    } else {
      (async () => {
        const data = await GetGroup();
        if (Array.isArray(data)) {
          setGroups(data);
        }
      })();
      console.log("Группа удалена:", result);
    }
  };
  return (
    <Link href={`/group/${id}`}>
      <div className={s.group}>
        <div className={s.deleteGroup} onClick={handleClick}>
          <DeleteIcon />
        </div>

        <h3 className={s.title}>{title}</h3>
      </div>
    </Link>
  );
};

export { Group };
