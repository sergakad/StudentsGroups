"use client";

import React from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useStudentsStore } from "@/stores/students-store";
import { ArrowLeftIcon } from "@/components/SvgIcons/ArrowLeftIcon";
import { GetStudent } from "@/api/StudentHttp";
import { Students } from "@/components/Students";
import s from "./page.module.scss";
import Link from "next/link";
import { useGroupsStore } from "@/stores/groups-store";

export default function PageStudents() {
  const currentGroupID = useStudentsStore((state) => state.currentGroupID);
  const setCurrentGroupID = useStudentsStore(
    (state) => state.setCurrentGroupID
  );
  const { groupId } = useParams();
  const setStudents = useStudentsStore((state) => state.setStudents);
  const setLoading = useStudentsStore((state) => state.setLoading);
  const isLoading = useStudentsStore((state) => state.isLoading);
  const groups = useGroupsStore((state) => state.groups);
  const currentGroup = groups.find((group) => group.id === currentGroupID);


  useEffect(() => {
    if (groupId) {
      setCurrentGroupID(Number(groupId));
      (async () => {
        const data = await GetStudent(Number(groupId));
        if (Array.isArray(data)) {
          setStudents(data);
          setLoading(false);
        }
      })();
    }
  }, []);

  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.titleWrapper}>
          <Link className={s.arrow} href={"/"}>
            <ArrowLeftIcon />
          </Link>

          <h2 className={s.title}>{currentGroup?.title}</h2>
        </div>
        {!isLoading ? (
          <Students />
        ) : (
          <div className={s.preloader}>
            <span>Loading...</span>
          </div>
        )}
      </main>
    </div>
  );
}
