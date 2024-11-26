"use client";

import { GetGroup } from "@/api/GroupHttp";
import { Groups } from "@/components/Groups";
import { useEffect } from "react";
import { useGroupsStore } from "@/stores/groups-store";
import s from "./page.module.scss";

export default function Home() {
  const setGroups = useGroupsStore((state) => state.setGroups);
  const setLoading = useGroupsStore((state) => state.setLoading);
  const isLoading = useGroupsStore((state) => state.isLoading);

  useEffect(() => {
    (async () => {
      const data = await GetGroup();
      if (Array.isArray(data)) {
        setGroups(data);
        setLoading(false);
      }
    })();
  }, [setGroups, setLoading]);

  return (
    <div className={s.page}>
      <main className={s.main}>
        <h2 className={s.title}>Группы</h2>
        {!isLoading ? (
          <Groups />
        ) : (
          <div className={s.preloader}>
            <span>Loading...</span>
          </div>
        )}
      </main>
    </div>
  );
}
